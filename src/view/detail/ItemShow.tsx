import React from 'react';

import { Gallery } from '../list/Gallery';

const { ArrayField, DateField, ImageField, RichTextField, SimpleShowLayout, ShowController, ShowView, TextField } = require('react-admin');

const Title : ({ record } : any) => React.ReactElement = ({ record } : any) : React.ReactElement => (
    <span>{record ? `${record.title}` : ''}</span>
);

export const ItemShow : (props : any) => React.ReactElement = (props : any) : React.ReactElement => (
    <ShowController {...props}>
        {(controllerProps : any) : React.ReactElement => (
            <ShowView
                title={<Title record={props.record} />}
                {...controllerProps}
                {...props}>
                <SimpleShowLayout>
                    <RichTextField
                        label=''
                        source='description' />
                    {controllerProps && controllerProps.record && controllerProps.record.images && controllerProps.record.images.length > 0 && (
                        <ArrayField
                            label=''
                            source='images'>
                            <Gallery
                                source='imageUrl'
                                caption='description'>
                                <ImageField
                                    label=''
                                    source='imageUrl'
                                    title='description' />
                            </Gallery>
                        </ArrayField>
                    )}
                    <TextField
                        label=''
                        source='source.name' />
                    <DateField
                        label=''
                        source='publishDate'
                        showTime />
                </SimpleShowLayout>
            </ShowView>
        )}
    </ShowController>
);
