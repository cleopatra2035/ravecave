import React from 'react';
import { Link } from 'react-router';
import AlbumListItemContainer from './album_list_item_container';

// const albumList = albums => (
//     albums.map(album => (
//         <AlbumListItemContainer
//             album={album}
//             key={album.id}
//         />
//     ))
// );

// const ArtistDetail = ({ artist, albums }) => {
//     return (
//         <div>
//             <ul>
//                 <li>Name: {artist.name}</li>
//                 <li>Location: {artist.location}</li>
//                 <li>Website: {artist.url}</li>
//             </ul>
//             <br />
//             <div>
//                 <h3>Albums</h3>
//                 {albumList(albums)}
//             </div>
//         </div>
//     );
// };

class ArtistDetail extends React.Component {
    componentDidMount() {
        this.props.fetchArtist(this.props.artistId);
    }

    albumList(albums) {
        return albums.map(album => (
            <AlbumListItemContainer
                album={album}
                key={album.id}
            />
        ))
    }

    render () {
        const { artist, albums } = this.props;

        return (
            <div>
                <ul>
                    <li>Name: {artist.name}</li>
                    <li>Location: {artist.location}</li>
                    <li>Website: {artist.url}</li>
                </ul>
                <br />
                <div>
                    <h3>Albums</h3>
                    {this.albumList(albums)}
                </div>
            </div>
        )
    }

}

export default ArtistDetail;