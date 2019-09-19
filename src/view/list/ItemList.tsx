import React from 'react';

import { CardList } from './CardList';
import { ItemFilter } from './ItemFilter';

const { List } = require('react-admin');

export class ItemList extends React.PureComponent<{}> {
    public constructor(props : any) {
        super(props);
    }

    public componentDidUpdate : () => void = () : void => {
        window.scrollTo(0, 0);
    }

    public render() : React.ReactElement {
        return (
            <List
                bulkActionButtons={false}
                exporter={false}
                filters={<ItemFilter />}
                {...this.props}>
                <CardList />
            </List>
        );
    }
}
