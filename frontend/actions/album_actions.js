import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ARTIST_ALBUM = 'RECEIVE_ARTIST_ALBUM';

const receiveAllAlbums = albums => ({
    type: RECEIVE_ALL_ALBUMS,
    albums
});

const receiveAlbum = album => ({
    type: RECEIVE_ALBUM,
    album
});

const receiveArtistAlbum = response => ({
    type: RECEIVE_ARTIST_ALBUM,
    album: response.album,
    artist: response.artist
})

export const fetchAlbums = () => dispatch => (
    AlbumApiUtil.fetchAlbums()
    .then(albums => dispatch(receiveAllAlbums(albums)))
);

export const fetchAlbum = albumId => dispatch => (
    AlbumApiUtil.fetchAlbum(albumId)
    .then(album => dispatch(receiveAlbum(album)))
);

export const fetchArtistAlbum = albumId => dispatch => (
    AlbumApiUtil.fetchArtistAlbum(albumId)
    .then(response => dispatch(receiveArtistAlbum(response)))
);