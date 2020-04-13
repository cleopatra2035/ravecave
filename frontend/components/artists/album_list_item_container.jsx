import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Album = ({ album }) => {
    const { id, name, description, artist_id } = album;
    return (
        <div>
            <ul>
                <li>
                    <Link to={`/albums/${id}`}>
                        ID: {id}
                    </Link>
                </li>
                <li>Name: {name}</li>
                <li>{description}</li>
            </ul>
        </div>
    );
};

export default Album;