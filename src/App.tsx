import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';

import * as Config from './Config';
import { MainResource } from './core/MainResource';
import { dataProvider } from './data/DataProvider';

const { Admin, Resource } = require('react-admin');

interface IProps {
    title? : string;
}

export const App : React.FunctionComponent<IProps> = (props : any) : React.ReactElement => (
    <ThemeProvider theme={createMuiTheme({
        palette : {
            type : 'light',
        },
    })}>
        <Admin
            dataProvider={dataProvider}
            i18nProvider={() : object => require('./lang').lang}
            {...props}>
            {Object.entries(Config.CATEGORIES).map((entry : any[number]) => (
                <MainResource
                    key={entry[0]}
                    name={entry[0]}
                    icon={entry[1]} />
            ))}
            <Resource name='sources' />
        </Admin>
    </ThemeProvider>
);
