import PropTypes from 'prop-types';
import React from 'react';
import { SingleFieldList } from 'react-admin';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { decode } from '../../util/StringUtils';

export class Gallery extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            index  : 0,
            isOpen : false,
        };
    }

    getImages = () => {
        return Object.entries(this.getEntries()).map(record => ({
            caption : decode(record[1][this.props.caption]),
            source  : record[1][this.props.source],
        }));
    };

    getEntries = () => this.props.ids && this.props.data ? this.props.ids.map(id => this.props.data[id]) : [];

    render = () => {
        const { source, ...props } = this.props;
        const { index, isOpen }    = this.state;

        const entries = this.getEntries();
        const images  = this.getImages();

        const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
            onClick : event => this.setState({
                index  : Math.max(0, entries
                    ? entries.findIndex(entry => entry[source] === event.target.src)
                    : 0),
                isOpen : true,
            }),
        }));

        return (
            <div>
                <SingleFieldList
                    linkType={false}
                    {...props}>
                    {children[0]}
                </SingleFieldList>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[index].source}
                        nextSrc={index + 1 < images.length ? images[(index + 1) % images.length].source : undefined}
                        prevSrc={index - 1 >= 0 ? images[(index + images.length - 1) % images.length].source
                            : undefined}
                        imageCaption={images[index].caption}
                        onCloseRequest={() => this.setState({
                            isOpen : false,
                        })}
                        onMoveNextRequest={() => this.setState({
                            index : (index + 1) % images.length,
                        })}
                        onMovePrevRequest={() => this.setState({
                            index : (index + images.length - 1) % images.length,
                        })}
                    />
                )}
            </div>
        );
    };
}

Gallery.propTypes = {
    ids      : PropTypes.arrayOf(PropTypes.string),
    data     : PropTypes.arrayOf(PropTypes.object),
    caption  : PropTypes.string,
    source   : PropTypes.string,
    children : PropTypes.arrayOf(PropTypes.element),
};
