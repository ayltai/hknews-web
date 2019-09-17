import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { ItemShow } from './ItemShow';

const { TestContext } = require('react-admin');

configure({
    adapter : new Adapter(),
});

it('mount without errors', () : void => {
    mount(
        <TestContext>
            <ItemShow
                basePath='/'
                resource='foo' />
        </TestContext>,
    );
});
