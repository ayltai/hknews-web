import { createMuiTheme, IconButton, SvgIcon, Switch, Tooltip, Typography } from '@material-ui/core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import React from 'react';
import { Admin, AppBar, Layout, Resource } from 'react-admin';

import * as Config from './Config';
import { dataProvider } from './data/DataProvider';
import { ItemShow } from './view/detail/ItemShow';
import { ItemList } from './view/list/ItemList';

const palette = Config.PALETTE;

export const App = props => {
    const [state, setState] = React.useState({
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

    const appTheme = createMuiTheme(state.theme);

    return (
        <Admin
            title={Config.APP_NAME}
            authProvider={false}
            dataProvider={dataProvider}
            i18nProvider={polyglotI18nProvider(() => require('./lang').lang)}
            layout={layoutProps => (
                <Layout
                    appBar={appBarProps => (
                        <AppBar
                            color='default'
                            userMenu={<div />}
                            logoutButton={false}
                            {...appBarProps}>
                            <Typography
                                variant='h6'
                                color='inherit'>
                                HK News
                            </Typography>
                            <span style={{
                                flex : 1,
                            }} />
                            <Tooltip title='Toggle light/dark theme'>
                                <Switch
                                    checked={state.checked}
                                    onChange={toggleTheme} />
                            </Tooltip>
                            <Tooltip title='GitHub'>
                                <IconButton onClick={() => window.open(Config.PROJECT_URL, '_blank')}>
                                    <SvgIcon>
                                        <path
                                            d='M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3' />
                                    </SvgIcon>
                                </IconButton>
                            </Tooltip>
                        </AppBar>
                    )}
                    {...layoutProps} />
            )}
            theme={appTheme}
            {...props}>
            {Object.entries(Config.CATEGORIES).map(entry => (
                <Resource
                    key={entry[0]}
                    name={entry[0]}
                    icon={entry[1]}
                    list={ItemList}
                    show={ItemShow}
                    options={{
                        label : entry[0],
                    }} />
            ))}
            <Resource name='sources' />
        </Admin>
    );
};
