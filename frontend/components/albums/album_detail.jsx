import React from 'react';
import { Link } from 'react-router';
import SlimNavContainer from '../slim_nav/slim_nav_container';
import Tabs from './tabs/tabs';

class AlbumDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    componentDidMount() {
        this.props.fetchArtistAlbum(this.props.albumId);
        this.props.fetchArtists();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.albumId !== this.props.match.params.albumId) {
            this.props.fetchArtistAlbum(this.props.match.params.albumId);
        }
    }

    // artistForAlbum(album) {
    //     const artists = this.props.fetchArtists();
    //     const artist = artists[album.artist_id];
    //     return artist;
    // }


    // albumInfo(album) {
    //     return <AlbumInfoItemContainer
    //             album={album}
    //             key={album.id}
    //         />
    // }

    render () {
        const { album } = this.props;

        return (
            <div>
                <ul>
                    <li>Name: {album.name}</li>
                    <li>Description: {album.description}</li>
                    <li></li>
                </ul>
            </div>
        )
    }
}

export default AlbumDetail;

