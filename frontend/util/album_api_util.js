export const fetchAlbums = () => (
    $.ajax({
        url: `api/albums/`
    })
);

export const fetchAlbum = albumId => (
    $.ajax({
        url: `/api/albums/${albumId}/`
    })
);

export const fetchArtistAlbums = artistId => (
    $.ajax({
        url: `api/albums/`,
        data: { artistId }
    })
)