export const selectArtist = ({ artists }, artistId) => {
    return artists[artistId] || { albumIds: [] };
};

export const selectAlbum = ({ albums }, albumId) => {
    return albums[albumId];
};

export const selectAlbumsforArtist = ({ artists, albums }, artist) => {
    return artist.albumIds.map(albumId => albums[albumId]);
};

export const asArray = ({ artists }) => (
    Object.keys(artists).map(key => artists[key])
);

