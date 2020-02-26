import { mount, } from 'enzyme';
import React from 'react';
import { TestContext, } from 'react-admin';
import renderer from 'react-test-renderer';

import { Gallery, } from './Gallery';

describe('', () => {
    it('', () => {
        expect(renderer.create(
            <TestContext>
                <Gallery
                    ids={[ 'id1', 'id2' ]}
                    data={{
                        id1 : {
                            caption : '1',
                            source  : 'image1',
                        },
                        id2 : {
                            caption : '2',
                            source  : 'image2',
                        },
                    }}
                    caption='caption'
                    source='source'>
                    <img src='image1' />
                </Gallery>
            </TestContext>
        ).toJSON()).toMatchSnapshot();
    });

    it('mount without errors', () => {
        mount(
            <TestContext>
                <Gallery
                    ids={[ 'id1', 'id2' ]}
                    data={{
                        id1 : {
                            caption : '1',
                            source  : 'image1',
                        },
                        id2 : {
                            caption : '2',
                            source  : 'image2',
                        },
                    }}
                    caption='caption'
                    source='source'>
                    <img src='image1' />
                </Gallery>
            </TestContext>
        );
    });
});
