import {
    RECEIVE_ARTIST,
    RECEIVE_ALBUM
} from '../actions/artist_actions';
import {
    RECEIVE_ALL_ALBUMS,
    RECEIVE_ARTIST_ALBUM
} from '../actions/album_actions';

const albumsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_ALL_ALBUMS:
            return Object.assign({}, oldState, action.albums)
        case RECEIVE_ARTIST:
            return Object.assign({}, oldState, action.albums)
        case RECEIVE_ARTIST_ALBUM:
        case RECEIVE_ALBUM:
            const { album } = action;
            return Object.assign({}, oldState, { [album.id]: album });
        default:
            return oldState;
    }
};

export default albumsReducer;