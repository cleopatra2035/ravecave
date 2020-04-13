import React from 'react';
import { connect } from 'react-redux';

const Album = ({ album }) => {
    const { name, description } = album;
    return (
        <div>
            <ul>
                <li>Name: {name}</li>
                <li>{description}</li>
            </ul>
        </div>
    );
};

export default Album;