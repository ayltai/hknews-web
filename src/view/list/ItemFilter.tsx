import React from 'react';

const { Filter, ReferenceInput, SelectInput } = require('react-admin');

export const ItemFilter : React.FunctionComponent<{}> = (props : any) : React.ReactElement => (
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
