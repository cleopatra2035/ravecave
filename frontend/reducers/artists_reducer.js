import {
    RECEIVE_ALL_ARTISTS,
    RECEIVE_ARTIST,
    RECEIVE_ALBUM
} from '../actions/artist_actions';

const artistsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_ALL_ARTISTS:
            return Object.assign({}, oldState, action.artists)
        case RECEIVE_ARTIST:
            return Object.assign({}, oldState, { [action.artist.id]: action.artist })
        case RECEIVE_ALBUM:
            debugger;
            const { album } = action;
            const newState = Object.assign({}, oldState);
            newState[album.artist_id].albumIds.push(album.id);
            return newState;
        default:
            return oldState;
    }
};

export default artistsReducer;