import React from 'react';
import ArtistIndexItem from './artist_index_item';

class ArtistIndex extends React.Component {
    componentDidMount() {
        this.props.fetchArtists();
    }

    render() {
        const { artists } = this.props;

        return (
            <div>
                <ul>
                    {
                        artists.map(artist => (
                            <ArtistIndexItem
                                artist={artist}
                                key={artist.id}
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }
};

export default ArtistIndex;