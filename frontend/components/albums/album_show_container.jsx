import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { fetchAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, { match }) => {
    const albumId = parseInt(match.params.albumId);
    const album = state.entities.albums[albumId];

    return {
        albumId
    };
};

const mapDispatchToProps = dispatch => ({
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);