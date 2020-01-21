export const IS_DEBUG     = process.env.NODE_ENV !== 'production';
export const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || (IS_DEBUG ? 'http://localhost:8080' : 'https://hknews.dev');
export const PROJECT_URL  = process.env.REACT_APP_PROJECT_URL || 'https://github.com/ayltai/hknews-web';
export const APP_NAME     = process.env.REACT_APP_APP_NAME || 'HK News';

export const PALETTE = {
    error     : {
        main : '#f44336',
    },
    primary   : {
        main : '#8bc34a',
    },
    secondary : {
        main : '#ff9100',
    },
    type      : 'light',
};

export const SOURCES = [ '蘋果日報', '東方日報', '星島日報', '星島即時', '經濟日報', '成報', '明報', '頭條日報', '頭條即時', '晴報', '信報', '香港電台', '南華早報', '英文虎報', '文匯報', ];

export const CATEGORIES = {
    港聞 : require('@material-ui/icons/Home').default,
    國際 : require('@material-ui/icons/Language').default,
    兩岸 : require('@material-ui/icons/Security').default,
    經濟 : require('@material-ui/icons/MonetizationOn').default,
    地產 : require('@material-ui/icons/LocationCity').default,
    娛樂 : require('@material-ui/icons/SentimentVerySatisfied').default,
    體育 : require('@material-ui/icons/Rowing').default,
    副刊 : require('@material-ui/icons/VideogameAsset').default,
    教育 : require('@material-ui/icons/School').default,
};

export const FETCH_DAYS            = 2;
export const NEWS_PER_PAGE         = 12;
export const NEWS_PER_PAGE_OPTIONS = [ 12, 24, 48, 96 ];
export const AVATAR_SIZE           = 40;
