# OLD:
# json.partial! "api/artists/artist", artist: @artist

# NEW:
json.artist do
    json.partial! "/api/artists/artist", artist: @artist
    json.albumIds @artist.album_ids
end

@artist.albums.includes(:artist).each do |album|
    json.albums do
        json.set! album.id do
            json.partial! 'api/albums/album', album: album
        end
    end
end