import { connect } from 'react-redux';
import ArtistIndex from './artist_index';
import { fetchArtists } from '../../actions/artist_actions';
import { selectAllArtists } from '../../reducers/selectors';

const mapStateToProps = state => ({
    artists: selectAllArtists(state)
});

const mapDispatchToProps = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndex);