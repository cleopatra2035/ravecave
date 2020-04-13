export const selectArtist = ({ artists }, artistId) => {
    return artists[artistId] || { albumIds: [] };
};

export const selectAlbumsforArtist = ({ artists, albums }, artist) => {
    debugger;
    return artist.albumIds.map(albumId => albums[albumId]);
};

export const asArray = ({ artists }) => (
    Object.keys(artists).map(key => artists[key])
);