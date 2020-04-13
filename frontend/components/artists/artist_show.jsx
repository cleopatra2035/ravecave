import React from 'react';
import { Link } from 'react-router-dom';
import ArtistAlbumItem from './artist_album_item';

class ArtistShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchArtist(this.props.match.params.artistId);
        // this.props.fetchArtistAlbums(this.props.match.params.artistId);
    }

    // albumList(discog) {
    //     return (
    //         discog.map(album => {
    //             return <ArtistAlbumItem album={album} key={album.id} />
    //         })
    //     )
    // }

    render() {
        const { artist } = this.props;

        return (
            <div>
                <h1>{artist.name}</h1>
                <p>{artist.location}</p>
                {/* <ul>
                    {this.albumList(this.props.discog) }
                </ul> */}
            </div>
        );
    }
}

export default ArtistShow;