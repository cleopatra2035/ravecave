# OLD:
# json.partial! 'api/albums/album', album: @album

# NEW:
json.album do
    json.partial! '/api/albums/album', album: @album
end