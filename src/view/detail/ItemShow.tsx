import React from 'react';

import { Gallery } from '../list/Gallery';

const { ArrayField, DateField, ImageField, RichTextField, SimpleShowLayout, ShowController, ShowView, TextField } = require('react-admin');

const Title : ({ record } : any) => React.ReactElement = ({ record } : any) : React.ReactElement => (
    <span>{record ? `${record.title}` : ''}</span>
);

interface IProps {
    record : any;
}

export class ItemShow extends React.PureComponent<IProps, {}> {
    public constructor(props : any) {
        super(props);
    }

    public componentDidUpdate : () => void = () : void => {
        window.scrollTo(0, 0);
    }

    public render() : React.ReactElement {
        return (
            <ShowController {...this.props}>
                {(controllerProps : any) : React.ReactElement => (
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
