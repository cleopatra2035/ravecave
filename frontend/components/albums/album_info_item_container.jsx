import React from 'react';

const AlbumInfoItemContainer = ({ album }) => {
    const { id, name, description, artist_id } = album;

    return (
        <div>
            <ul>
                <li>{name}</li>
            </ul>
        </div>
    );
};

export default AlbumInfoItemContainer;