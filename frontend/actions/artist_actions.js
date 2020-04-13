import * as ArtistApiUtil from '../util/artist_api_util';

export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

const receiveAllArtists = artists => ({
    type: RECEIVE_ALL_ARTISTS,
    artists
});

const receiveArtist = ({ artist, albums }) => ({
    type: RECEIVE_ARTIST,
    artist,
    albums
});

const receiveAlbum = ({ album }) => ({
    type: RECEIVE_ALBUM,
    album
})

export const fetchArtists = () => dispatch => (
    ArtistApiUtil.fetchArtists()
        .then(artists => dispatch(receiveAllArtists(artists)))
);

export const fetchArtist = artistId => dispatch => (
    ArtistApiUtil.fetchArtist(artistId)
        .then(payload => dispatch(receiveArtist(payload)))
);

export const fetchAlbum = albumId => dispatch => (
    ArtistApiUtil.fetchAlbum(albumId)
        .then(album => dispatch(receiveAlbum(album)))
);