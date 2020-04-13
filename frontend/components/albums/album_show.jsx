import React from 'react';
import { Link } from 'react-router-dom';
import AlbumDetail from './album_detail';

const AlbumShow = ({ album, albumId, fetchArtistAlbum }) => {
    const albums = {
        [albumId]: album
    }

    return (
        <div>
            <div>
                <Link to="/artists">Back to Artists Index</Link>
                <AlbumDetail album={album} albumId={albumId} fetchArtistAlbum={fetchArtistAlbum}/>
            </div>
        </div>
    )
}
    
    // componentDidMount() {
    //     this.props.fetchArtistAlbum(this.props.match.params.albumId);
    // }

    // render() {
    //     const { album } = this.props;

    //     return (
    //         <div>
    //             <h1>{album.name}</h1>
    //             <p>{album.description}</p>
    //         </div>
    //     );
    // }
// }

export default AlbumShow;