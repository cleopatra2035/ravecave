export const fetchTracks = () => (
    $.ajax({
        url: `api/tracks/`
    })
);

export const fetchTrack = trackId => (
    $.ajax({
        url: `/api/tracks/${trackId}/`
    })
);