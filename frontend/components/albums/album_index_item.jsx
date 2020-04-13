import React from 'react';
import { Link } from 'react-router-dom';

const AlbumIndexItem = props => (
    <li>
        {props.album.name}
    </li>
);

export default AlbumIndexItem;