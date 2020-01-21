import { fetchUtils, GET_LIST, GET_MANY, GET_MANY_REFERENCE, GET_ONE } from 'react-admin';

import * as Config from '../Config';

const sources = Config.SOURCES;
const days    = Config.FETCH_DAYS;

export const dataProvider = async (type, resource, params = {}) => {
    const convertDataToHttpRequest = () => {
        if (resource === 'sources') {
            switch (type) {
                case GET_LIST:
                case GET_MANY_REFERENCE:
                    return `${Config.API_ENDPOINT}/${resource}?page=${params.pagination
                        ? params.pagination.page - 1
                        : 0}&size=${params.pagination ? params.pagination.perPage : 25}`;

                default:
                    if (Config.IS_DEBUG) console.error(`Unsupported fetch action type ${type} for resource ${resource} and params ${JSON.stringify(params)}`);

                    return undefined;
            }
        }

        switch (type) {
            case GET_LIST:
            case GET_MANY:
            case GET_MANY_REFERENCE:
                return `${Config.API_ENDPOINT}/items/${params.filter && params.filter.source
                    ? `${params.filter.source},${params.filter.source.substr(0, 2)}即時`
                    : sources.join(',')}/${resource},即時${resource}/${days}?page=${params.pagination
                    ? params.pagination.page - 1 : 0}&size=${params.pagination ? params.pagination.perPage : Config.NEWS_PER_PAGE}`;

            case GET_ONE:
                return `${Config.API_ENDPOINT}/item/${params.id}`;

            default:
                if (Config.IS_DEBUG) console.error(`Unsupported fetch action type ${type} for resource ${resource} and params ${JSON.stringify(params)}`);
        }
    };

    const convertHttpResponseFromData = response => {
        if (response) {
            switch (type) {
                case GET_LIST:
                case GET_MANY_REFERENCE:
                    if (Object.prototype.hasOwnProperty.call(response.json, 'totalElements')) {
                        response.json.content.map(item => {
                            if (Object.prototype.hasOwnProperty.call(item, 'recordId')) {
                                item.id = item.recordId;
                            } else if (Object.prototype.hasOwnProperty.call(item, 'name')) {
                                item.id       = item.name;
                                item.imageUrl = Config.API_ENDPOINT + String(item.imageUrl);
                            }

                            return item;
                        });

                        return {
                            data  : response.json.content,
                            total : parseInt(response.json.totalElements, 10),
                        };
                    }

                    if (Config.IS_DEBUG) console.error('Missing totalElements property in JSON response');
                    break;

                default:
                    if (Object.prototype.hasOwnProperty.call(response.json, 'recordId')) response.json.id = response.json.recordId;
                    if (Object.prototype.hasOwnProperty.call(response.json, 'title')) response.json.title = response.json.title.replace(/&#(\d+);/g, (substring, arg) => String.fromCharCode(arg));

                    return {
                        data : response.json,
                    };
            }
        }

        return {};
    };

    const url = convertDataToHttpRequest();
    if (url) return fetchUtils.fetchJson(url).then(convertHttpResponseFromData);

    return Promise.resolve({
        data : [],
    });
};
