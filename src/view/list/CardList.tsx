import { Card, CardActions, CardContent, CardHeader, CardMedia, Theme } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import TimeAgo from 'react-timeago';

import './CardList.css';

const { TextField, RichTextField, ShowButton } = require('react-admin');

interface IProps {
    basePath? : string;
    classes?  : any;
    data?     : any;
    ids?      : string[];
}

interface IStyles {
    card                    : {};
    descriptionWithMedia    : {};
    descriptionWithoutMedia : {};
}

const styles : (theme : Theme) => IStyles = (theme : Theme) : IStyles => ({
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
    descriptionWithMedia    : {
        [theme.breakpoints.down('xs')] : {
            height : 70,
        },
        [theme.breakpoints.only('sm')] : {
            height : 65,
        },
        [theme.breakpoints.up('md')]   : {
            height : 140,
        },
    },
    descriptionWithoutMedia : {
        [theme.breakpoints.down('xs')] : {
            height : 250,
        },
        [theme.breakpoints.only('sm')] : {
            height : 330,
        },
        [theme.breakpoints.up('md')]   : {
            height : 410,
        },
    },
});

const avatarSize : number = 40;

const BaseCardList : React.FunctionComponent<IProps> = (props : IProps) : React.ReactElement => {
    const { classes } = props;

    return (
        <div>
            {props.ids!.map((id : string) => (
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
                            className={`Description ${props.data[id].images && props.data[id].images.length > 0 ? classes.descriptionWithMedia : classes.descriptionWithoutMedia}`}
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
};

export const CardList : any = withStyles(styles)(BaseCardList);
