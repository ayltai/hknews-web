import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { Gallery } from './Gallery';

const { TestContext } = require('react-admin');

configure({
    adapter : new Adapter(),
});

it('mount without errors', () : void => {
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
