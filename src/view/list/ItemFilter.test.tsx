import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { ItemFilter } from './ItemFilter';

const { TestContext } = require('react-admin');

configure({
    adapter : new Adapter(),
});

it('mount without errors', () : void => {
    mount(
        <TestContext>
            <ItemFilter
                resource='foo'
                displayedFilters={{}}
                hideFilter={() : void => {
                    return;
                }} />
        </TestContext>,
    );
});
