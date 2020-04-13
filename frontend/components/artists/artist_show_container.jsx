import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { fetchArtist } from '../../actions/artist_actions';
import { selectAlbumsforArtist, selectArtist } from '../../reducers/selectors';

// const mapStateToProps = (state, ownProps) => ({
//     artist: state.entities.artists[ownProps.match.params.artistId]
// });

// const mapDispatchToProps = dispatch => ({
//     fetchArtist: artistId => dispatch(fetchArtist(artistId))
// });

const mapStateToProps = (state, { match }) => {
    const artistId = parseInt(match.params.artistId);
    const artist = selectArtist(state.entities, artistId);
    const albums = selectAlbumsforArtist(state.entities, artist);
    return {
        artistId,
        artist,
        albums
    };
};

const mapDispatchToProps = dispatch => ({
    fetchArtist: id => dispatch(fetchArtist(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);