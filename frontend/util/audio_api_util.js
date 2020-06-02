export const fetchSongs = albumId => (
    $.ajax({
        url: `api/songs/`,
        data: { albumId }
    })
);