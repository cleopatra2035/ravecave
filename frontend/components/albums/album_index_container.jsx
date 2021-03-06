import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchArtists } from '../../actions/artist_actions';

const mapStateToProps = state => {
    const albums = Object.values(state.entities.albums);
    const artists = Object.values(state.entities.artists);
    return {
        albums,
        artists
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAlbums: () => dispatch(fetchAlbums()),
        fetchArtists: () => dispatch(fetchArtists())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);