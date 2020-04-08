import { connect } from 'react-redux';
import ArtistIndex from './artist_index';
import { fetchArtists } from '../../actions/artist_actions';

const mapStateToProps = state => ({
    artists: Object.values(state.artists)
});

const mapDispatchToProps = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistIndex);