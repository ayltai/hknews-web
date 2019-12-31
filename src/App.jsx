import { IconButton, SvgIcon, Switch, Typography } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import React from 'react';
import { Admin, AppBar, Layout, Resource } from 'react-admin';

import * as Config from './Config';
import { AppResource } from './core/AppResource';
import { dataProvider } from './data/DataProvider';

export const App = props => {
    const palette = Config.PALETTE;

    const [ state, setState ] = React.useState({
        checked : false,
        theme   : {
            palette,
        },
    });

    const toggleTheme = event => {
        palette.type = event.target.checked ? 'dark' : 'light';

        setState({
            checked : event.target.checked,
            theme   : {
                palette,
            },
        });
    };

    const mainTheme = createMuiTheme(state.theme);

    return (
        <MuiThemeProvider theme={mainTheme}>
            <Admin
                layout={layoutProps => (
                    <Layout
                        appBar={appBarProps => (
                            <AppBar
                                color='default'
                                userMenu={<span />}
                                {...appBarProps}>
                                <Typography
                                    variant='h6'
                                    color='inherit'>
                                    HK News
                                </Typography>
                                <span style={{
                                    flex : 1,
                                }} />
                                <Switch
                                    checked={state.checked}
                                    onChange={toggleTheme} />
                                <IconButton
                                    onClick={() => {
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
                i18nProvider={polyglotI18nProvider(() => require('./lang').lang)}
                theme={mainTheme}
                {...props}>
                {Object.entries(Config.CATEGORIES).map(entry => (
                    <AppResource
                        key={entry[0]}
                        name={entry[0]}
                        icon={entry[1]} />
                ))}
                <Resource name='sources' />
            </Admin>
        </MuiThemeProvider>
    );
};
