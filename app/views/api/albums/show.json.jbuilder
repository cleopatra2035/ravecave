# OLD:
# json.partial! 'api/albums/album', album: @album

# NEW:
json.album do
    json.partial! '/api/albums/album', album: @album
end

json.artist do
    json.partial! '/api/artists/artist', artist: @album.artist
    json.albumIds @album.artist.album_ids
end