import { mount } from 'enzyme';
import React from 'react';
import { TestContext } from 'react-admin';
import { act } from 'react-dom/test-utils';

import { ItemShow } from './ItemShow';

it('mount without errors', async () => {
    await act(async () => {
        mount(
            <TestContext>
                <ItemShow
                    basePath='/'
                    resource='foo' />
            </TestContext>);
    });
});
