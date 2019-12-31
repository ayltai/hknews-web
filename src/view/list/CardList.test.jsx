import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { render } from 'enzyme';
import React from 'react';
import { TestContext } from 'react-admin';

import { CardList } from './CardList';

it('mount without errors', () => {
    render(
        <TestContext>
            <MuiThemeProvider theme={createMuiTheme({
                palette : {
                    type : 'dark',
                },
            })}>
                <CardList
                    basePath='/'
                    data={{
                        id1 : {
                            description : '',
                            images      : [{
                                description : '',
                                imageUrl    : '',
                            }],
                            publishDate : '',
                            source      : {
                                name : '',
                            },
                            title       : '',
                        },
                        id2 : {
                            description : '',
                            images      : [{
                                description : '',
                                imageUrl    : '',
                            }],
                            publishDate : '',
                            source      : {
                                name : '',
                            },
                            title       : '',
                        },
                    }}
                    ids={[ 'id1', 'id2' ]} />
            </MuiThemeProvider>
        </TestContext>,
    );
});
