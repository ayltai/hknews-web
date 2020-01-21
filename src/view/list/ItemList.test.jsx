import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { render } from 'enzyme';
import React from 'react';
import { TestContext } from 'react-admin';

import { ItemList } from './ItemList';

const defaultStoreForList = {
    admin : {
        resources : {
            foo : {
                list : {
                    ids         : [],
                    params      : {},
                    selectedIds : [],
                    total       : 0,
                },
            },
        },
    },
};

it('mount without errors', () => {
    render(
        <TestContext initialState={defaultStoreForList}>
            <MuiThemeProvider theme={createMuiTheme({
                palette : {
                    type : 'dark',
                },
            })}>
                <ItemList
                    basePath='/'
                    ids={[]}
                    location={{
                        pathname : '',
                    }}
                    resource='foo'>
                    <div />
                </ItemList>
            </MuiThemeProvider>
        </TestContext>,
    );
});
