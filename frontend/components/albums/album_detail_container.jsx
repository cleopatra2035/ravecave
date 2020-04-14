import { connect } from 'react-redux';
import AlbumDetail from './album_detail';
import { fetchAlbum } from '../../actions/album_actions';
// import { selectArtistAlbum } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
    const albumId = parseInt(match.params.albumId);
    const album = selectArtistAlbum(state.entities, albumId);
    const artists = Object.values(state.entities.artists)
}
    

export default connect(
    mapStateToProps
)(AlbumDetail);
