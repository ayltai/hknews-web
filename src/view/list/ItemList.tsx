import React from 'react';

import { CardList } from './CardList';
import { ItemFilter } from './ItemFilter';

const { List } = require('react-admin');

export const ItemList : React.FunctionComponent<{}> = (props : any) : React.ReactElement => (
    <List
        bulkActionButtons={false}
        filters={<ItemFilter />}
        {...props}>
        <CardList />
    </List>
);
