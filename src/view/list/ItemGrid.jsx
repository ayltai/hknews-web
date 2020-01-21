import { Card, CardActions, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Tooltip } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { RichTextField, ShowButton, TextField } from 'react-admin';
import TimeAgo from 'react-timeago';

import * as Config from '../../Config';
import { decode } from '../../util/StringUtils';
import './ItemGrid.css';

export const ItemGrid = ({ ids, data, basePath, }) => (
    <div style={{ padding : 16, flexGrow : 1, }}>
        <Grid
            container
            spacing={2}>
            {ids.map(id => (
                <Grid
                    item
                    key={id}
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    xl={3}>
                    <Card>
                        <CardHeader
                            title={
                                <TextField
                                    record={data[id]}
                                    source='source.name' />
                            }
                            subheader={
                                <TimeAgo date={data[id].publishDate} />
                            }
                            avatar={
                                <img
                                    src={`${Config.API_ENDPOINT + data[id].source.imageUrl}`}
                                    width={Config.AVATAR_SIZE}
                                    height={Config.AVATAR_SIZE}
                                    title={data[id].source.name}
                                    alt={data[id].source.name} />
                            } />
                        <CardActionArea href={`#${basePath}/${data[id].recordId}/show`}>
                            {data[id].images && data[id].images.length > 0 && (
                                <Tooltip title={data[id].images[0].description ? decode(data[id].images[0].description) : ''}>
                                    <CardMedia
                                        className='Media'
                                        image={data[id].images[0].imageUrl} />
                                </Tooltip>
                            )}
                            <CardContent>
                                <RichTextField
                                    className='Title'
                                    record={data[id]}
                                    source='title' />
                                <RichTextField
                                    className='Description'
                                    record={data[id]}
                                    source='description' />
                            </CardContent>
                        </CardActionArea>
                        <CardActions className='Actions'>
                            <ShowButton
                                label='labels.read_more'
                                record={data[id]}
                                basePath={basePath} />
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </div>
);

ItemGrid.propTypes = {
    ids      : PropTypes.arrayOf(PropTypes.string),
    data     : PropTypes.arrayOf(PropTypes.object),
    basePath : PropTypes.string,
};
