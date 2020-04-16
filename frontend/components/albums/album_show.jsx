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
                <AlbumDetail album={album} albumId={albumId} fetchArtistAlbum={fetchArtistAlbum} />
            </div>
        </div>
    )
}
//     const albums = {
//         [albumId]: album
//     }

//     return (
//         <div>
//             <div>
//                 <Link to="/artists">Back to Artists Index</Link>
//                 <AlbumDetail album={album} albumId={albumId} fetchArtistAlbum={fetchArtistAlbum}/>
//             </div>
//         </div>
//     )
// }

export default AlbumShow;