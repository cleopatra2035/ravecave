import {
    RECEIVE_ALL_ARTISTS,
    RECEIVE_ARTIST
} from '../actions/artist_actions';

const ArtistsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_ALL_ARTISTS:
            return Object.assign({}, oldState, action.artists)
        case RECEIVE_ARTIST:
            return Object.assign({}, oldState, { [action.artist.id]: action.artist })
        default:
            return oldState;
    }
};

export default ArtistsReducer;