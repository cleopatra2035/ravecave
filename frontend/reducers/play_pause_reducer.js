import {
    SET_PLAY_PAUSE
} from '../actions/play_pause_actions';

const playPauseReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case SET_PLAY_PAUSE:
            if (action.play === true || action.play === false) {
                return action.play;
            } else {
                return !oldState;
            }
        default:
            return oldState;
    }
};

export default playPauseReducer;