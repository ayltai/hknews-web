import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { CardList } from './CardList';

const { TestContext } = require('react-admin');

configure({
    adapter : new Adapter(),
});

it('mount without errors', () : void => {
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
