import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { ItemList } from './ItemList';

const { TestContext } = require('react-admin');

configure({
    adapter : new Adapter(),
});

const defaultStoreForList : {} = {
    admin: {
        resources: {
            foo: {
                list: {
                    ids: [],
                    params: {},
                    selectedIds: [],
                    total: 0,
                },
            },
        },
    },
};

it('mount without errors', () : void => {
    render(
        <TestContext store={defaultStoreForList}>
            <ItemList
                basePath='/'
                ids={[]}
                location={{
                    pathname : '',
                }}
                resource='foo'>
                <div />
            </ItemList>
        </TestContext>,
    );
});