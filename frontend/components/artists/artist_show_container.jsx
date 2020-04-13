import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { fetchArtist } from '../../actions/artist_actions';

const mapStateToProps = (state, ownProps) => ({
    artist: state.entities.artists[ownProps.match.params.artistId]
});

const mapDispatchToProps = dispatch => ({
    fetchArtist: artistId => dispatch(fetchArtist(artistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistShow);