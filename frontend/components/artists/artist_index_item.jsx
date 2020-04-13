import React from 'react';
import { Link } from 'react-router-dom';

const ArtistIndexItem = props => (
    <li>
        <Link to={`/artists/${props.artist.id}`}>{props.artist.name}</Link>
    </li>
);

export default ArtistIndexItem;