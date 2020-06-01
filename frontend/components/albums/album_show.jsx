import React from 'react';
import { Link } from 'react-router-dom';
import AlbumDetail from './album_detail';

const AlbumShow = ({ album, albumId, artist, fetchArtistAlbum }) => {
    const albums = {
        [albumId]: album
    }

    return (
        <div className="black-wrapper">
            <AlbumDetail album={album} albumId={albumId} artist={artist} fetchArtistAlbum={fetchArtistAlbum} />
        </div>
    )
};

export default AlbumShow;