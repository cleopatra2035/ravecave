import { connect } from 'react-redux';
import ArtistIndex from './artist_index';
import { fetchArtists } from '../../actions/artist_actions';
import { selectAllArtist } from '../../reducers/selectors';

const mapStateToProps = state => ({
    artists: selectAllArtist(state),
    // loading: state.ui.loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndex);