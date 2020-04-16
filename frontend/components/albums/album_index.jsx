import React from 'react';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAlbums();
    }

    render() {
        const { albums } = this.props;

        return (
            <div id="notable" className="notable">
                <div className="row">
                    <div className="col col-8-16">
                        <h3 className="section-title">
                            New and Notable
                        </h3>
                    </div>
                </div>
                <div className="row featured-albums">
                    <AlbumIndexItem albums={this.props.albums} />
                </div>
            </div>
        );
    }
};

export default AlbumIndex;