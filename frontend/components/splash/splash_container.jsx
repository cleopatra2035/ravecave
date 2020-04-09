import { connect } from 'react-redux';
import Splash from './splash';
import { fetchFeatAlbums } from '../../reducers/selectors';
import { fetchAlbums } from '../../actions/album_actions';

const mapStateToProps = (state) => ({
    albums: Object.keys(state.entities.albums).map(key => state.entities.albums[key])
});

const mapDispatchToProps = dispatch => ({
    fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);