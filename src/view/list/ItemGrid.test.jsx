import { createMuiTheme, MuiThemeProvider, } from '@material-ui/core';
import { render, } from 'enzyme';
import React from 'react';
import { TestContext, } from 'react-admin';
import renderer from 'react-test-renderer';

import { ItemGrid, } from './ItemGrid';

describe('', () => {
    it('', () => {
        expect(renderer.create(
            <TestContext>
                <MuiThemeProvider theme={createMuiTheme({
                    palette : {
                        type : 'dark',
                    },
                })}>
                    <ItemGrid
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
                        ids={[
                            'id1',
                            'id2'
                        ]} />
                </MuiThemeProvider>
            </TestContext>
        ).toJSON()).toMatchSnapshot();
    });

    it('mount without errors', () => {
        render(
            <TestContext>
                <MuiThemeProvider theme={createMuiTheme({
                    palette : {
                        type : 'dark',
                    },
                })}>
                    <ItemGrid
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
                        ids={[
                            'id1',
                            'id2'
                        ]} />
                </MuiThemeProvider>
            </TestContext>
        );
    });
});

