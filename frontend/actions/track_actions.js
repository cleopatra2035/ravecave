import * as TrackApiUtil from '../util/track_api_util';

export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';

const receiveAllTracks = tracks => ({
    type: RECEIVE_ALL_TRACKS,
    tracks
});

const receiveTrack = track => ({
    type: RECEIVE_TRACK,
    track
});

export const fetchTracks = () => dispatch => (
    TrackApiUtil.fetchTracks()
        .then(tracks => dispatch(receiveAllTracks(tracks)))
);

export const fetchTrack = trackId => dispatch => (
    TrackApiUtil.fetchTrack(trackId)
        .then(track => dispatch(receiveTrack(track)))
);