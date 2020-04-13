import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { fetchAlbums } from '../../actions/artist_actions';

const mapStateToProps = state => ({
    albums: Object.values(state.entities.albums)
});

const mapDispatchToProps = dispatch => ({
    fetchAlbums: () => dispatch(fetchAlbums())
})

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);