import {
    RECEIVE_ALBUMS,
    RECEIVE_ALBUM,
    RECEIVE_TOP_ALBUMS
} from '../actions/album_actions';

const albumsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALBUMS:
            return action.albums;
        case RECEIVE_ALBUM:
            const newAlbum = { [action.album.id]: action.album };
            return Object.assign({}, state, newAlbum);
        case RECEIVE_TOP_ALBUMS:
            const newState = action.albums;
            return Object.assign({}, state, newState);
        default:
            return state;
    }
};

export default albumsReducer;