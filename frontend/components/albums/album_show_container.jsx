import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { fetchArtistAlbum } from '../../actions/album_actions';
import { selectAlbum, selectTracks } from '../../reducers/selectors';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchSongs } from '../../actions/audio_actions';

const mapStateToProps = (state, { match }) => {
    debugger;
    const albumId = parseInt(match.params.albumId);
    const album = selectAlbum(state.entities, albumId) || {};
    const artist = state.entities.artists[album.artist_id] || {};
    // const tracks = selectTracks(state.entities, albumId) || {};

    return {
        albumId,
        album,
        artist,
        // tracks
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchArtistAlbum: albumId => dispatch(fetchArtistAlbum(albumId)),
        fetchSongs: albumId => dispatch(fetchSongs(albumId))
        // fetchArtists: () => dispatch(fetchArtists())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);