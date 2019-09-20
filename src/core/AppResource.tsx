import React from 'react';

import { ItemShow } from '../view/detail/ItemShow';
import { ItemList } from '../view/list/ItemList';

const { Resource } = require('react-admin');

interface IProps {
    name : string;
    icon : any;
}

export const AppResource : React.FunctionComponent<IProps> = (props : IProps) : React.ReactElement => (
    <Resource
        name={props.name}
        list={ItemList}
        show={ItemShow}
        icon={props.icon}
        {...props} />
);
