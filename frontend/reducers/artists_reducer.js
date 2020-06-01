import {
    RECEIVE_ALL_ARTISTS,
    RECEIVE_ARTIST,
    RECEIVE_ALBUM
} from '../actions/artist_actions';
import { RECEIVE_ARTIST_ALBUM } from '../actions/album_actions';

const artistsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_ALL_ARTISTS:
            return Object.assign({}, oldState, action.artists)
        case RECEIVE_ARTIST_ALBUM:
        case RECEIVE_ARTIST:
            return Object.assign({}, oldState, { [action.artist.id]: action.artist })
        case RECEIVE_ALBUM:
            debugger;
            const { album } = action;
            const newState = Object.assign({}, oldState);
            newState[album.artist_id].albumIds.push(album.id);
            return newState;
            // debugger;
            // const newAlbum = { [action.album.id]: action.album };
            // return Object.assign({}, oldState, newAlbum);
        default:
            return oldState;
    }
};

export default artistsReducer;