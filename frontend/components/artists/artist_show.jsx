import React from 'react';
import { Link } from 'react-router-dom';

class ArtistShow extends React.Component {
    componentDidMount() {
        this.props.fetchArtist(this.props.match.params.artistId);
    }

    render() {
        const { artist } = this.props;

        return (
            <div>
                <h1>{artist.name}</h1>
                <Link to="/" />
            </div>
        );
    }
}

export default ArtistShow;