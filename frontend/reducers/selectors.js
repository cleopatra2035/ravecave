<<<<<<< HEAD
export const selectAllArtists = state => Object.values(state.entities.artists);

export const selectArtistItems = (state, artist) => {
    return artist ? artist.item_ids.map(id => state.entities.items[id]) : [];
};

export const selectArtistItem = (state, id) => {
    return state.entities.items[id];
};
=======
// export const fetchFeatAlbums = state => {
//     const albums = state.entities.albums
//     let top = state.ui.albumsIds.map(id => albums[id])

//     return top;
// }

// export const fetchTopMusic = state => {
//     const albums = state.entities.albums
//     let top = state.ui.albumsIds.map(id => albums[id])
//     let artists = {}

//     top.forEach(item => {
//         artists[item.artist_id] = state.entities.users[item.artist_id];
//     });

//     return artists;
// }

// export const selectAlbum = ({ albums }, albumId) => {
//     return albums[albumId]
// };

export const fetchFeatAlbums = ({ albums }, albumId) => {
    return albums[albumId]
};
>>>>>>> artist-profile
