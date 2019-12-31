import React from 'react';
import { List } from 'react-admin';

import { CardList } from './CardList';
import { ItemFilter } from './ItemFilter';

export class ItemList extends React.PureComponent {
    componentDidUpdate = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <List
                bulkActionButtons={false}
                exporter={false}
                filters={<ItemFilter />}
                title='ra.page.list'
                {...this.props}>
                <CardList />
            </List>
        );
    }
}
