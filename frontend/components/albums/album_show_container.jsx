import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { fetchArtistAlbum } from '../../actions/album_actions';
import { selectAlbum } from '../../reducers/selectors';
import { fetchArtists } from '../../actions/artist_actions';

const mapStateToProps = (state, { match }) => {
    debugger;
    const albumId = parseInt(match.params.albumId);
    const album = selectAlbum(state.entities, albumId) || {};
    const artist = state.entities.artists[album.artist_id] || {};

    return {
        albumId,
        album,
        artist
    }
};

const mapDispatchToProps = dispatch => {
    debugger;
    return {
        fetchArtistAlbum: albumId => dispatch(fetchArtistAlbum(albumId))
        // fetchArtists: () => dispatch(fetchArtists())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);