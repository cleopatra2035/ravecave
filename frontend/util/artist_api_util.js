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