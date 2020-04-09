import * as APIUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_TOP_ALBUMS = 'RECEIVE_TOP_ALBUMS';

const receiveAlbums = albums => ({
    type: RECEIVE_ALBUMS,
    albums
});

const receiveAlbum = album => ({
    type: RECEIVE_ALBUM,
    album
});

const receiveTopAlbums = albums => ({
    type: RECEIVE_TOP_ALBUMS,
    albums
});

export const fetchAlbums = () => dispatch => (
    APIUtil.fetchAlbums()
        .then(albums => dispatch(receiveAlbums(albums)))
);

export const fetchAlbum = albumId => dispatch => (
    APIUtil.fetchAlbum(albumId)
        .then(album => dispatch(receiveAlbum(album)))
);

export const fetchTopAlbums = () => dispatch => (
    APIUtil.fetchTopAlbums()
        .then(albums => dispatch(receiveTopAlbums(albums)))
);