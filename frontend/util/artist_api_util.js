export const fetchArtists = () => (
    $.ajax({
        url: `api/artists/`
    })
);

export const fetchArtist = artistId => (
    $.ajax({
        url: `/api/artists/${artistId}/`
    })
);

export const fetchAlbum = album => (
    $.ajax({
        url: `api/albums`,
        data: { album }
    })
);