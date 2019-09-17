import * as Config from '../Config';

const { fetchUtils, GET_LIST, GET_MANY, GET_MANY_REFERENCE, GET_ONE } = require('react-admin');

const sources : string[] = [ '蘋果日報', '東方日報', '星島日報', '星島即時', '經濟日報', '成報', '明報', '頭條日報', '頭條即時', '晴報', '信報', '香港電台', '南華早報', '英文虎報', '文匯報' ];
const days    : number   = 2;

export const dataProvider : (type : string, resource : string, params? : any) => Promise<any> = (type : string, resource : string, params : any = {}) : Promise<any> => {
    const convertDataToHttpRequest : () => string | undefined = () : string | undefined => {
        if (resource === 'sources') {
            switch (type) {
                case GET_LIST:
                case GET_MANY_REFERENCE:
                    return `${Config.API_ENDPOINT}/${resource}?page=${params.pagination ? params.pagination.page - 1 : 0}&size=${params.pagination ? params.pagination.perPage : 25}`;

                default:
                    if (Config.IS_DEBUG) console.error(`Unsupported fetch action type ${type} for resource ${resource} and params ${JSON.stringify(params)}`);

                    return;
            }
        }

        switch (type) {
            case GET_LIST:
            case GET_MANY:
            case GET_MANY_REFERENCE:
                return `${Config.API_ENDPOINT}/items/${params.filter && params.filter.source ? `${params.filter.source},${params.filter.source.substr(0, 2)}即時` : sources.join(',')}/${resource},即時${resource}/${days}?page=${params.pagination ? params.pagination.page - 1 : 0}&size=${params.pagination ? params.pagination.perPage : 10}`;

            case GET_ONE:
                return `${Config.API_ENDPOINT}/item/${params.id}`;

            default:
                if (Config.IS_DEBUG) console.error(`Unsupported fetch action type ${type} for resource ${resource} and params ${JSON.stringify(params)}`);
        }
    };

    const convertHttpResponseFromData : (response : any) => any = (response : any) : any => {
        if (response) {
            switch (type) {
                case GET_LIST:
                case GET_MANY_REFERENCE:
                    if (response.json.hasOwnProperty('totalElements')) {
                        response.json.content.map((item : any) => {
                            if (item.hasOwnProperty('recordId')) {
                                item.id = item.recordId;
                            } else if (item.hasOwnProperty('name')) {
                                item.id       = item.name;
                                item.imageUrl = Config.API_ENDPOINT + item.imageUrl;
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
                    if (response.json.hasOwnProperty('recordId')) response.json.id = response.json.recordId;

                    return {
                        data : response.json,
                    };
            }
        }

        return {};
    };

    const url : string | undefined = convertDataToHttpRequest();
    if (url) return fetchUtils.fetchJson(url).then(convertHttpResponseFromData);

    return Promise.resolve({
        data : [],
    });
};
