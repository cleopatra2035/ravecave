import {
    RECEIVE_ALL_SONGS
} from '../actions/audio_actions';

const audioReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_ALL_SONGS:
            return Object.assign({}, oldState, action.songs)
        default:
            return oldState;
    }
};

export default audioReducer;