import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { fetchArtistAlbum } from '../../actions/album_actions';
import { selectAlbum } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
    const albumId = parseInt(match.params.albumId);
    const album = selectAlbum(state.entities, albumId);
    return {
        albumId,
        album
    }
};

const mapDispatchToProps = dispatch => {
    debugger;
    return {
        fetchArtistAlbum: albumId => dispatch(fetchArtistAlbum(albumId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);