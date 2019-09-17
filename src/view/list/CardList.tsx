import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import TimeAgo from 'react-timeago';

import './CardList.css';

const { TextField, RichTextField, ShowButton } = require('react-admin');

const avatarSize : number = 40;

export interface IProps {
    basePath? : string;
    data?     : any;
    ids?      : string[];
}

export const CardList : React.FunctionComponent<IProps> = (props : IProps) : React.ReactElement => (
    <div>
        {props.ids!.map((id : string) => (
            <Card
                className='Card'
                key={id}>
                <CardHeader
                    title={
                        <TextField
                            record={props.data[id]}
                            source='source.name' />
                    }
                    subheader={
                        <TimeAgo date={props.data[id].publishDate} />
                    }
                    avatar={
                        <img
                            src={`${process.env.REACT_APP_API_ENDPOINT + props.data[id].source.imageUrl}`}
                            width={avatarSize}
                            height={avatarSize}
                            alt={props.data[id].source.name}
                            title={props.data[id].source.name} />
                    } />
                {props.data[id].images && props.data[id].images.length > 0 && (
                    <CardMedia
                        className='Media'
                        image={props.data[id].images[0].imageUrl}
                        title={props.data[id].images[0].description} />
                )}
                <CardContent>
                    <RichTextField
                        className='Title'
                        record={props.data[id]}
                        source='title' />
                </CardContent>
                <CardContent>
                    <RichTextField
                        className='Description'
                        style={props.data[id].images && props.data[id].images.length > 0 ? { height : '140px' } : { height : '410px' }}
                        record={props.data[id]}
                        source='description' />
                </CardContent>
                <CardActions className='Actions'>
                    <ShowButton
                        label='labels.read_more'
                        basePath={props.basePath}
                        record={props.data[id]} />
                </CardActions>
            </Card>
        ))}
    </div>
);
