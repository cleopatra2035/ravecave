export const fetchAlbums = () => (
    $.ajax({
        method: 'GET',
        url: '/api/albums'
    })
);

export const fetchAlbum = albumId => (
    $.ajax({
        method: 'GET',
        url: `/api/albums/${albumId}`
    })
);

export const fetchTopAlbums = () => (
    $.ajax({
        method: 'GET',
        url: 'api/albums/top/4'
    })
)