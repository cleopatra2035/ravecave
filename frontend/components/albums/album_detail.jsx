import React from 'react';
import AlbumInfoItemContainer from './album_info_item_container';

class AlbumDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };

        // this.albumInfo = this.albumInfo.bind(this);
    }
    componentDidMount() {
        this.props.fetchArtistAlbum(this.props.albumId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.albumId !== this.props.match.params.albumId) {
            this.props.fetchArtistAlbum(this.props.match.params.albumId);
        }
    }

    albumInfo(album) {
        return <AlbumInfoItemContainer
                album={album}
                key={album.id}
            />
    }

    render () {
        const { album } = this.props;

        return (
            <div>
                {/* <AlbumInfoItemContainer album={album} key={album.id} /> */}
                <ul>
                    <li>Name: {album.name}</li>
                    <li>Description: {album.description}</li>
                </ul>
            </div>
        )
    }
}

export default AlbumDetail;