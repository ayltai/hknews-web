import { mount } from 'enzyme';
import React from 'react';
import { TestContext } from 'react-admin';

import { Gallery } from './Gallery';

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
        </TestContext>,
    );
});
