import {
    RECEIVE_ALL_ALBUMS,
    RECEIVE_ALBUM
} from '../actions/album_actions';

const AlbumsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_ALL_ALBUMS:
            return Object.assign({}, oldState, action.albums)
        case RECEIVE_ALBUM:
            return Object.assign({}, oldState, { [action.album.id]: action.album })
        default:
            return oldState;
    }
};

export default AlbumsReducer;