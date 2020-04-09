json.artists do
  @artists.each do |artist|
    json.set! artist.id do
<<<<<<< HEAD
      json.partial! 'api/artists/artist', artist: artist
=======
      json.partial! 'artist', artist: artist
>>>>>>> artist-profile
    end
  end
end