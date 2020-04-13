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
                <AlbumInfoItemContainer album={album} key={album.id} />
            </div>
        )
    }
}

export default AlbumDetail;