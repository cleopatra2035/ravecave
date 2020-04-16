json.extract! album, :id, :name, :artist_id, :featured, :genre, :release_date, :description
if album.artwork.attached?
    json.artwork url_for(album.artwork)
end

