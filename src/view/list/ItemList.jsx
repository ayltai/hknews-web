import React from 'react';
import { List, Pagination } from 'react-admin';

import * as Config from '../../Config';
import { ItemFilter } from './ItemFilter';
import { ItemGrid } from './ItemGrid';

export class ItemList extends React.PureComponent {
    componentDidUpdate = () => {
        window.scrollTo(0, 0);
    };

    render = () => (
        <List
            bulkActionButtons={false}
            exporter={false}
            filters={<ItemFilter />}
            perPage={Config.NEWS_PER_PAGE}
            pagination={<Pagination rowsPerPageOptions={Config.NEWS_PER_PAGE_OPTIONS} />}
            {...this.props}>
            <ItemGrid />
        </List>
    );
}
