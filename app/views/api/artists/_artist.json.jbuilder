json.extract! artist, :id, :name, :user_id, :location, :url
# json.album_ids artist.albums.sort{|x,y| y.created_at <=> x.created_at}.map{ |album| album.id }