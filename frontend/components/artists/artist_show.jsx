import React from 'react';
import { Link } from 'react-router-dom';
import ArtistDetail from './artist_detail';

// class ArtistShow extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {
//         this.props.fetchArtist(this.props.match.params.artistId);
//         // this.props.fetchArtistAlbums(this.props.match.params.artistId);
//     }

//     // albumList(discog) {
//     //     return (
//     //         discog.map(album => {
//     //             return <ArtistAlbumItem album={album} key={album.id} />
//     //         })
//     //     )
//     // }

//     render() {
//         const { artist } = this.props;

//         return (
//             <div>
//                 <h1>{artist.name}</h1>
//                 <p>{artist.location}</p>
//                 {/* <ul>
//                     {this.albumList(this.props.discog) }
//                 </ul> */}
//             </div>
//         );
//     }
// }

const ArtistShow = ({ artist, artistId, fetchArtist, albums }) => {
    const artists = {
        [artistId]: artist
    };

    return (
        <div>
            <div>
                <Link to="/artists">Back to Artists Index</Link>
                <ArtistDetail artist={artist} artistId={artistId} albums={albums} fetchArtist={fetchArtist}/>
            </div>
        </div>
    )
}

export default ArtistShow;