import React from 'react';
import { Filter, ReferenceInput, SelectInput } from 'react-admin';

export const ItemFilter = props => (
    <Filter {...props}>
        <ReferenceInput
            label='Publisher'
            source='source'
            reference='sources'
            allowEmpty
            alwaysOn>
            <SelectInput optionText='name' />
        </ReferenceInput>
    </Filter>
);