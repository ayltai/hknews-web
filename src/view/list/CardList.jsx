import { Card, CardActions, CardActionArea, CardContent, CardHeader, CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { TextField, RichTextField, ShowButton } from 'react-admin';
import TimeAgo from 'react-timeago';

import './CardList.css';

const styles = theme => ({
    card                    : {
        [theme.breakpoints.down('xs')] : {
            height : 480,
            margin : '1.25em',
            width  : 320,
        },
        [theme.breakpoints.only('sm')] : {
            height : 560,
            margin : '1.5em',
            width  : 480,
        },
        [theme.breakpoints.up('md')]   : {
            height : 640,
            margin : '2em',
            width  : 480,
        },
    },
    title : {
        [theme.breakpoints.down('xs')] : {
            width : 260,
        },
        [theme.breakpoints.only('sm')] : {
            width : 440,
        },
        [theme.breakpoints.up('md')] : {
            width : 440,
        },
    },
    descriptionWithMedia    : {
        [theme.breakpoints.down('xs')] : {
            height : 90,
        },
        [theme.breakpoints.only('sm')] : {
            height : 85,
        },
        [theme.breakpoints.up('md')]   : {
            height : 160,
        },
    },
    descriptionWithoutMedia : {
        [theme.breakpoints.down('xs')] : {
            height : 270,
        },
        [theme.breakpoints.only('sm')] : {
            height : 350,
        },
        [theme.breakpoints.up('md')]   : {
            height : 430,
        },
    },
});

const avatarSize = 40;

const BaseCardList = props => {
    const { classes } = props;

    return (
        <div>
            {props.ids.map(id => (
                <Card
                    key={id}
                    className={`Card ${classes.card}`}>
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
                    <CardActionArea
                        href={`#${props.basePath}/${props.data[id].recordId}/show`}>
                        {props.data[id].images && props.data[id].images.length > 0 && (
                            <CardMedia
                                className='Media'
                                image={props.data[id].images[0].imageUrl}
                                title={props.data[id].images[0].description} />
                        )}
                        <CardContent>
                            <RichTextField
                                className={`Title ${classes.title}`}
                                record={props.data[id]}
                                source='title' />
                            <RichTextField
                                className={`Description ${props.data[id].images && props.data[id].images.length > 0 ? classes.descriptionWithMedia : classes.descriptionWithoutMedia}`}
                                record={props.data[id]}
                                source='description' />
                        </CardContent>
                    </CardActionArea>
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
};

export const CardList = withStyles(styles)(BaseCardList);
