import React from 'react';
import { ArrayField, DateField, ImageField, RichTextField, SimpleShowLayout, ShowController, ShowView, TextField } from 'react-admin';

import { Gallery } from '../list/Gallery';

const Title = record => (
    <span>{record ? `${record.title}` : ''}</span>
);

export class ItemShow extends React.PureComponent {
    componentDidUpdate = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <ShowController {...this.props}>
                {controllerProps => (
                    <ShowView
                        title={<Title record={this.props.record} />}
                        {...controllerProps}
                        {...this.props}>
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
    }
}
