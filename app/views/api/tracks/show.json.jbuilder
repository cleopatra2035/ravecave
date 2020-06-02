# OLD:
# json.partial! 'api/tracks/track', track: @track

# NEW:
json.track do
    json.partial! '/api/tracks/track', track: @track
end

json.album do
    json.partial! '/api/albums/album', album: @track.album
    json.trackIds @track.album.track_ids
end