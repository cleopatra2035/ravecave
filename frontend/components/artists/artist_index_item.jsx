import React from 'react';
import { Link } from 'react-router-dom';

const ArtistIndexItem = ({ artist }) => (
    <li className="artist-index-item">
        <Link to={`/artists/${artist.id}`}>
            <span>{artist.name}</span>
        </Link>
    </li>
);

export default ArtistIndexItem;