# @albums.each do |album|
#     json.set! album.id do
#         json.partial! 'api/albums/album', album: album
#     end
# end

@albums.each do |album|
  json.set! album.id do
    json.partial! 'album', album: album
  end
end