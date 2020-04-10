import { connect } from 'react-redux';
import { fetchArtist } from '../../actions/artist_actions';
import ArtistShow from './artist_show';
import { selectArtist, selectArtistItems } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
    artist: state.artists[ownProps.match.params.artistId]
});

const mapDispatchToProps = dispatch => ({
    fetchArtist: artistId => dispatch(fetchArtist(artistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);