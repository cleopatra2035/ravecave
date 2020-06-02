import { connect } from 'react-redux';
import SongPlayer from './song_player';
import { setCurrentSong } from '../../actions/audio_actions';
import { setPlayPause } from '../../actions/play_pause_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentSong: state.entities.currentSong,
        isPlaying: state.ui.playPause
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentSong: song => dispatch(setCurrentSong(song)),
        setPlayPause: play => dispatch(setPlayPause(play))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SongPlayer);