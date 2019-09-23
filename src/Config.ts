import { PaletteType } from '@material-ui/core';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

export const IS_DEBUG      : boolean      = process.env.NODE_ENV !== 'production';
export const API_ENDPOINT  : string       = process.env.REACT_APP_API_ENDPOINT || '';
export const PROJECT_URL   : string       = process.env.REACT_APP_PROJECT_URL || '';
export const DEFAULT_THEME : PaletteType  = 'light';

export const PALETTE : PaletteOptions = {
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

export const CATEGORIES : {} = {
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
