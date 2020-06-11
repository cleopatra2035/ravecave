export const selectArtist = ({ artists }, artistId) => {
    return artists[artistId] || { albumIds: [] };
};

export const selectAlbum = ({ albums }, albumId) => {
    return albums[albumId];
};

export const selectTracks = ({ tracks }, album) => {
    if (!album.trackIds || Object.keys(tracks).length === 0) return [];
    return album.trackIds.map(trackId => tracks[trackId]);
}

export const selectAlbumsforArtist = ({ artists, albums }, artist) => {
    return artist.albumIds.map(albumId => albums[albumId]);
};

export const asArray = ({ artists }) => (
    Object.keys(artists).map(key => artists[key])
);

