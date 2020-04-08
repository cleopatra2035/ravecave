# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Artist.delete_all

# ////// USERS

u1 = User.create!(
    username: 'cleopatra2035',
    email: 'cleopatra2035@gmail.com',
    password: 'starwars'
)

u2 = User.create!(
    username: 'greenvillain',
    email: 'geevee@gmail.com',
    password: 'starwars'
)

u3 = User.create!(
    username: 'quell',
    email: 'quellcristfalconer@gmail.com',
    password: 'starwars'
)

u4 = User.create!(
    username: 'gratefuldead',
    email: 'thegratefuldead@gmail.com',
    password: 'starwars'
)

u5 = User.create!(
    username: 'martyn3024',
    email: 'thisismartyn@gmail.com',
    password: 'starwars'
)

u6 = User.create!(
    username: 'therealburial',
    email: 'burial@co.uk',
    password: 'starwars'
)

u7 = User.create!(
    username: 'shyeyez',
    email: 'shyeyez@gmail.com',
    password: 'starwars'
)

# ////// ARTISTS

art1 = Artist.create!(
    name: 'Grateful Dead',
    user_id: u4.id
)

art2 = Artist.create!(
    name: 'Martyn',
    user_id: u5.id
)

art3 = Artist.create!(
    name: 'Burial',
    user_id: u6.id
)

art4 = Artist.create!(
    name: 'Shy Eyez',
    user_id: u7.id
)

# ////// ALBUMS

album1 = Album.create!(
    name: 'Cornell 5/8/77',
    artist_id: art1.id
)

album2 = Album.create!(
    name: 'Great Lengths',
    artist_id: art2.id
)

album3 = Album.create!(
    name: 'Untrue',
    artist_id: art3.id
)

album4 = Album.create!(
    name: 'Greatest Hits: Bangers Only',
    artist_id: art4.id
)

album5 = Album.create!(
    name: 'One Eye EP (3024​-​FYE5)',
    artist_id: art2.id
)

# ////// TRACKS

t1 = Track.create!(
    name: 'New Minglewood Blues',
    ord: 1,
    artist_id: art1.id,
    album_id: album1.id
)

t2 = Track.create!(
    name: 'Vancouver',
    ord: 6,
    artist_id: art2.id,
    album_id: album2.id
)

t3 = Track.create!(
    name: 'In McDonalds',
    ord: 7,
    artist_id: art3.id,
    album_id: album3.id
)

t4 = Track.create!(
    name: 'One Eye',
    ord: 1,
    artist_id: art2.id,
    album_id: album5.id
)

t5 = Track.create!(
    name: 'Nerve Centers',
    ord: 2,
    artist_id: art2.id,
    album_id: album5.id
)


