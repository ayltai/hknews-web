import { mount } from 'enzyme';
import React from 'react';
import { TestContext } from 'react-admin';

import { ItemFilter } from './ItemFilter';

it('mount without errors', () => {
    mount(
        <TestContext>
            <ItemFilter
                resource='foo'
                displayedFilters={{}}
                hideFilter={() => {
                    return;
                }} />
        </TestContext>,
    );
});
