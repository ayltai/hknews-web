import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const { SingleFieldList } = require('react-admin');

interface IProps {
    children : any;
    ids?     : string[];
    data?    : any[string];
    caption  : string;
    source   : string;
}

interface IState {
    index  : number;
    isOpen : boolean;
}

export class Gallery extends React.PureComponent<IProps, IState> {
    public constructor(props : IProps) {
        super(props);

        this.state = {
            index  : 0,
            isOpen : false,
        };
    }

    private getImages : () => any[] = () : any[] => {
        return Object.entries(this.getEntries()).map((record : any[]) => ({
            caption : record[1][this.props.caption],
            source  : record[1][this.props.source],
        }));
    }

    private getEntries : () => any = () : any => this.props.ids && this.props.data ? this.props.ids.map((id : string) => this.props.data[id]) : [];

    public render : () => React.ReactNode = () : React.ReactNode => {
        const { source, ...props } = this.props;
        const { index, isOpen }    = this.state;

        const entries : any   = this.getEntries();
        const images  : any[] = this.getImages();

        const children : any = React.Children.map(this.props.children, (child : any) => {
            const element : any = React.cloneElement(child, {
                onClick : (event : any) : void => this.setState({
                    index  : Math.max(0, entries ? entries.findIndex((entry : any) => entry[this.props.source] === event.target.src) : 0),
                    isOpen : true,
                }),
            });

            return element;
        });

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
                        prevSrc={index - 1 >= 0 ? images[(index + images.length - 1) % images.length].source : undefined}
                        imageCaption={images[index].caption}
                        onCloseRequest={() : void => this.setState({
                            isOpen : false,
                        })}
                        onMoveNextRequest={() : void => this.setState({
                            index : (index + 1) % images.length,
                        })}
                        onMovePrevRequest={() : void => this.setState({
                            index : (index + images.length - 1) % images.length,
                        })}
                    />
                )}
            </div>
        );
    }
}
