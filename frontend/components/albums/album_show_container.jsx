import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { fetchAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => ({
    album: state.entities.albums[ownProps.match.params.albumId]
});

const mapDispatchToProps = dispatch => ({
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);