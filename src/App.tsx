import { IconButton, SvgIcon, Switch, Typography } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, Theme } from '@material-ui/core/styles';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import React from 'react';
import { JssProvider } from 'react-jss';

import * as Config from './Config';
import { AppResource } from './core/AppResource';
import { dataProvider } from './data/DataProvider';

const { Admin, AppBar, Layout, Resource } = require('react-admin');

interface IProps {
    title? : string;
}

export const App : React.FunctionComponent<IProps> = (props : any) : React.ReactElement => {
    const palette : PaletteOptions = Config.PALETTE;

    const [ state, setState ] = React.useState({
        checked : false,
        theme : {
            palette,
        },
    });

    const toggleTheme : (event : React.ChangeEvent<HTMLInputElement>) => void = (event : React.ChangeEvent<HTMLInputElement>) : void => {
        palette.type = event.target.checked ? 'dark' : 'light';

        setState({
            checked : event.target.checked,
            theme   : {
                palette,
            },
        });
    };

    const mainTheme : Theme = createMuiTheme(state.theme);

    return (
        <JssProvider>
            <MuiThemeProvider theme={mainTheme}>
                <Admin
                    appLayout={(layoutProps : any) : React.ReactElement => (
                        <Layout
                            appBar={(appBarProps : any) : React.ReactElement => (
                                <AppBar
                                    color='default'
                                    {...appBarProps}>
                                    <Typography
                                        variant='h6'
                                        color='inherit'
                                        id='react-admin-title' />
                                        <span style={{
                                            flex : 1,
                                        }} />
                                    <Switch
                                        checked={state.checked}
                                        onChange={toggleTheme} />
                                    <IconButton
                                        onClick={() : void => {
                                            window.open(Config.PROJECT_URL, '_blank');
                                        }}>
                                        <SvgIcon>
                                            <path d='M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3' />
                                        </SvgIcon>
                                    </IconButton>
                                </AppBar>
                            )}
                            {...layoutProps}
                        />
                    )}
                    dataProvider={dataProvider}
                    i18nProvider={() : object => require('./lang').lang}
                    theme={mainTheme}
                    {...props}>
                    {Object.entries(Config.CATEGORIES).map((entry : any[number]) => (
                        <AppResource
                            key={entry[0]}
                            name={entry[0]}
                            icon={entry[1]} />
                    ))}
                    <Resource name='sources' />
                </Admin>
            </MuiThemeProvider>
        </JssProvider>
    );
};
