import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchArtist } from '../../actions/artist_actions';
import ArtistShow from './artist_show';
import { selectArtist, selectArtistItems } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    const artistId = ownProps.match.params.artistId;
    const artist = state.entities.artists[artistId];
    return { artistId, artist };
};

const mapDispatchToProps = dispatch => ({
    fetchArtist: artistId => dispatch(fetchArtist(artistId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArtistShow));