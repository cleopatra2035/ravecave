export const selectAllArtists = state => Object.values(state.entities.artists);

export const selectArtistItems = (state, artist) => {
    return artist ? artist.item_ids.map(id => state.entities.items[id]) : [];
};

export const selectArtistItem = (state, id) => {
    return state.entities.items[id];
};
