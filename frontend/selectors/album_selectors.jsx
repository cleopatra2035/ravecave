export const selectDiscog = (albums = {}, albumIds = []) => {
    let discIds = albumIds.filter(id => albums[id]);
    const discog = discIds.map(id => albums[id]);
    return discog;
};