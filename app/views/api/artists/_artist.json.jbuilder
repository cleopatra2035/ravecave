# OLD:
# json.extract! artist, :id, :name, :user_id, :location, :url

# NEW:
json.extract! artist, :id, :name, :user_id, :location, :url

if artist.profile_pic.attached?
    json.profile_pic url_for(artist.profile_pic);
end