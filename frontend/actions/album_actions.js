import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

const receiveAllAlbums = albums => ({
    type: RECEIVE_ALL_ALBUMS,
    albums
});

const receiveAlbum = album => ({
    type: RECEIVE_ALBUM,
    album
});

export const fetchAlbums = () => dispatch => (
    AlbumApiUtil.fetchAlbums()
    .then(albums => dispatch(receiveAllAlbums(albums)))
);

export const fetchAlbum = albumId => dispatch => (
    AlbumApiUtil.fetchAlbum(albumId)
    .then(album => dispatch(receiveAlbum(album)))
);

export const fetchArtistAlbums = artistId => dispatch => (
    AlbumApiUtil.fetchArtistAlbums(artistId)
    .then(albums => dispatch(receiveAllAlbums(albums)))
);