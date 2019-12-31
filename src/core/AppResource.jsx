import React from 'react';
import { Resource } from 'react-admin';

import { ItemShow } from '../view/detail/ItemShow';
import { ItemList } from '../view/list/ItemList';

export const AppResource = props => (
    <Resource
        name={props.name}
        icon={props.icon}
        list={ItemList}
        show={ItemShow}
        options={{
            label : props.name
        }}
        {...props} />
);
