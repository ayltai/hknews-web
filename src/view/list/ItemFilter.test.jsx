import { mount, } from 'enzyme';
import React from 'react';
import { TestContext, } from 'react-admin';
import renderer from 'react-test-renderer';

import { ItemFilter, } from './ItemFilter';

describe('', () => {
    it('', () => {
        expect(renderer.create(
            <TestContext>
                <ItemFilter
                    resource='foo'
                    displayedFilters={{}}
                    hideFilter={() => {
                        return;
                    }} />
            </TestContext>
        ).toJSON()).toMatchSnapshot();
    });

    it('mount without errors', () => {
        mount(
            <TestContext>
                <ItemFilter
                    resource='foo'
                    displayedFilters={{}}
                    hideFilter={() => {
                        return;
                    }} />
            </TestContext>
        );
    });
});
