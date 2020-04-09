import {
    RECEIVE_ARTISTS,
    RECEIVE_ARTIST
} from '../actions/artist_actions';

const artistsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ARTISTS:
            return Object.assign({}, state, action.artists);
        case RECEIVE_ARTIST:
            const newArtist = { [action.artist.id]: action.artist };
            return Object.assign({}, state, newArtist);
        default:
            return state;
    }
};

export default artistsReducer;