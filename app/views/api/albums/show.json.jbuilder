# OLD:
# json.partial! 'api/albums/album', album: @album

# NEW:
json.album do
    json.partial! '/api/albums/album', album: @album
    json.trackIds @album.track_ids
end

json.artist do
    json.partial! '/api/artists/artist', artist: @album.artist
    json.albumIds @album.artist.album_ids
end

@album.tracks.includes(:album).each do |track|
    json.tracks do
        json.set! track.id do
            json.partial! 'api/tracks/track', track: track
        end
    end
end