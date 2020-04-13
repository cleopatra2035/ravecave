json.extract! album, :id, :name, :artist_id, :featured, :genre, :release_date, :description

# json.artists do
#   json.set! album.artist.id do
#     json.extract! album.artist, :id, :name, :user_id, :location, :url
#     json.album_ids album.artist.album_ids
#   end
# end