import React from 'react';
import { Link } from 'react-router-dom';
import AlbumDetail from './album_detail';

const AlbumShow = ({ album, albumId, artist, tracks, fetchArtistAlbum, fetchSongs }) => {
    const albums = {
        [albumId]: album
    }

    return (
        <div className="black-wrapper">
            <AlbumDetail album={album} albumId={albumId} artist={artist} tracks={tracks} fetchArtistAlbum={fetchArtistAlbum} fetchSongs={fetchSongs}/>
        </div>
    )
};

export default AlbumShow;