import * as AudioApiUtil from '../util/audio_api_util';

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';

const receiveAllSongs = songs => ({
    type: RECEIVE_ALL_SONGS,
    songs
});

export const setCurrentSong = song => ({
    type: SET_CURRENT_SONG,
    song
});

export const fetchSongs = albumId => dispatch => (
    AudioApiUtil.fetchSongs(albumId)
    .then(songs => dispatch(receiveAllSongs(songs)))
);