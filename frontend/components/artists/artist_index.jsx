import React from 'react';
import ArtistIndexItem from './artist_index_item';
import ArtistShowContainer from './artist_show_container';

class ArtistIndex extends React.Component {
    componentDidMount() {
        this.props.fetchArtists();
    }

    render() {
        const { artists } = this.props;
        return (
            <section className="artist-index">
                <Route
                    path="/artists/:artistId"
                    component={ArtistShowContainer}
                />
                <ul>
                    {artists.map(artist => <ArtistIndexItem key={artist.id} artist={artist} />)}
                </ul>
            </section>
        );
    }
};

// const ArtistIndex = ({ artists }) => (
//     <div>
//         {artists.map(artist => (
//             <ArtistIndexItem
//                 artist={artist}
//                 key={artist.id}
//             />
//         ))}
//     </div>
// )
export default ArtistIndex;