import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { CardList } from './CardList';

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
        <CardList
            basePath='/'
            data={{
                id1 : {
                    description : '',
                    images      : [{
                        description : '',
                        imageUrl    : '',
                    }],
                    publishDate : '',
                    source      : {
                        name : '',
                    },
                    title       : '',
                },
                id2 : {
                    description : '',
                    images      : [{
                        description : '',
                        imageUrl    : '',
                    }],
                    publishDate : '',
                    source      : {
                        name : '',
                    },
                    title       : '',
                },
            }}
            ids={[ 'id1', 'id2' ]} />
        </TestContext>,
    );
});
