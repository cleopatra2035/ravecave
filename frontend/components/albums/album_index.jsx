import React from 'react';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAlbums();
    }

    render() {
        const { albums } = this.props;

        return (
            <div>
                <ul>
                    {
                        albums.map(album => (
                            <AlbumIndexItem
                                album={album}
                                key={album.id}
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }
};

export default AlbumIndex;