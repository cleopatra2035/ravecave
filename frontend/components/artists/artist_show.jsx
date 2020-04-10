import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArtistAbout } from './artist_about';

class ArtistShow extends React.Component {
    componentDidMount() {
        this.props.fetchArtist(this.props.artistId);
    }

    render() {
        // const { artist } = this.props;

        if (!this.props.artist) return null;

        return (
            <div>
                <Route path={`/artists/${this.props.artist.id}`} render={() => <ArtistAbout artist={this.props.artist} />} />
            </div>
        );
    }
}

export default ArtistShow;