import { mount } from 'enzyme';
import React from 'react';
import { TestContext } from 'react-admin';

import { ItemShow } from './ItemShow';

it('mount without errors', () => {
    mount(
        <TestContext>
            <ItemShow
                basePath='/'
                resource='foo' />
        </TestContext>,
    );
});
