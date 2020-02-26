import { mount, } from 'enzyme';
import React from 'react';
import { TestContext, } from 'react-admin';
import { act, } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

import { ItemShow, } from './ItemShow';

describe('', () => {
    it('', () => {
        expect(renderer.create(
            <TestContext>
                <ItemShow
                    basePath='/'
                    resource='foo' />
            </TestContext>
        ).toJSON()).toMatchSnapshot();
    });

    it('mount without errors', async () => {
        await act(async () => {
            mount(
                <TestContext>
                    <ItemShow
                        basePath='/'
                        resource='foo' />
                </TestContext>
            );
        });
    });
});
