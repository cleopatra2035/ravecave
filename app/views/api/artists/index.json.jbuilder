# OLD:
# @artists.each do |artist|
#   json.set! artist.id do
#     json.partial! 'api/artists/artist', artist: artist
#   end
# end

# NEW:
@artists.each do |artist|
  json.set! artist.id do
    json.partial! 'artist', artist: artist
    json.albumIds []
  end
end