# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Artist.delete_all
Album.delete_all
Track.delete_all

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

u8 = User.create!(
    username: 'demo',
    email: 'demo@demo.com',
    password: 'starwars'
)

# ////// ARTISTS

art1 = Artist.create!(
    name: 'Grateful Dead',
    user_id: User.find_by(username: 'gratefuldead').id,
    location: 'Palo Alto, California',
    url: 'dead.net'
)

art2 = Artist.create!(
    name: 'Martyn',
    user_id: User.find_by(username: 'martyn3024').id,
    location: 'Eindhoven, The Netherlands',
    url: '3024world.com'
)

art3 = Artist.create!(
    name: 'Burial',
    user_id: User.find_by(username: 'therealburial').id,
    location: 'South London, United Kingdom',
    url: 'hyperdub.net'
)

art4 = Artist.create!(
    name: 'Shy Eyez',
    user_id: User.find_by(username: 'shyeyez').id,
    location: 'Brooklyn, New York',
    url: 'shyeyez.com'
)

# ////// ALBUMS

album1 = Album.create!(
    name: 'Cornell 5/8/77',
    artist_id: Artist.find_by(name: 'Grateful Dead').id,
    featured: false,
    genre: 'rock',
    description: 'The quintessence of the Grateful Dead is the only way to describe this essential album. The band said it was freezing inside the university auditorium the night of the recording, but that had no effect on how fired up they got across the 3-hour show. A must listen for any new or old Deadhead!',
    release_date: Date.new(2017,05,05)
)

album2 = Album.create!(
    name: 'Great Lengths',
    artist_id: Artist.find_by(name: 'Martyn').id,
    featured: false,
    genre: 'electronic',
    description: 'Dutch producer and 3024-founder Martyn makes dubstep his own in his debut album.',
    release_date: Date.new(2017,11,8)
)

album3 = Album.create!(
    name: 'Untrue',
    artist_id: Artist.find_by(name: 'Burial').id,
    featured: false,
    genre: 'electronic',
    description: 'The elusive producer manipulates vocal samples with raw sounds of dubstep, UK garage, ambient and hardcore music.',
    release_date: Date.new(2007,11,05)
)

album4 = Album.create!(
    name: 'Greatest Hits: Bangers Only',
    artist_id: Artist.find_by(name: 'Shy Eyez').id,
    featured: false,
    genre: 'electronic',
    description: 'Get lost in the sounds of tracks played at my ongoing 3024 residency in New York City.',
    release_date: Date.new(2020,04,01)
)

album5 = Album.create!(
    name: 'One Eye EP (3024​-​FYE5)',
    artist_id: Artist.find_by(name: 'Martyn').id,
    featured: true,
    genre: 'electronic',
    description: 'Martyn returns with two bass-heavy, melodic bangers.',
    release_date: Date.new(2019,11,24)
)

# ////// TRACKS

t1 = Track.create!(
    name: 'New Minglewood Blues',
    ord: 1,
    artist_id: Artist.find_by(name: 'Grateful Dead').id,
    album_id: Album.find_by(name: 'Cornell 5/8/77').id
)

t2 = Track.create!(
    name: 'Vancouver',
    ord: 6,
    artist_id: Artist.find_by(name: 'Martyn').id,
    album_id: Album.find_by(name: 'Great Lengths').id
)

t3 = Track.create!(
    name: 'In McDonalds',
    ord: 7,
    artist_id: art3.id,
    album_id: Album.find_by(name: 'Untrue').id
)

t4 = Track.create!(
    name: 'One Eye',
    ord: 1,
    artist_id: Artist.find_by(name: 'Martyn').id,
    album_id: Album.find_by(name: 'One Eye EP (3024​-​FYE5)').id
)

t5 = Track.create!(
    name: 'Nerve Centers',
    ord: 2,
    artist_id: Artist.find_by(name: 'Martyn').id,
    album_id: Album.find_by(name: 'One Eye EP (3024​-​FYE5)').id
)

# ////// IMAGES

art1_pp = open('https://ravecave-seeds.s3.amazonaws.com/artists/gratefuldead.jpg')
art2_pp = open('https://ravecave-seeds.s3.amazonaws.com/artists/martyn.jpg')
art3_pp = open('https://ravecave-seeds.s3.amazonaws.com/artists/burial.jpg')
art4_pp = open('https://ravecave-seeds.s3.amazonaws.com/artists/shyeyez_credit_maxwellschiano.jpg')

art1.profile_pic.attach(io: art1_pp, filename: 'art1_pp.jpg', content_type: 'image/jpeg')
art2.profile_pic.attach(io: art2_pp, filename: 'art2_pp.jpg', content_type: 'image/jpeg')
art3.profile_pic.attach(io: art3_pp, filename: 'art3_pp.jpg', content_type: 'image/jpeg')
art4.profile_pic.attach(io: art4_pp, filename: 'art4_pp.jpg', content_type: 'image/jpeg')

imagefile1 = open('https://ravecave-seeds.s3.amazonaws.com/albums/gratefuldead_cornell.jpg')
imagefile2 = open('https://ravecave-seeds.s3.amazonaws.com/albums/martyn_greatlengths.jpg')
imagefile3 = open('https://ravecave-seeds.s3.amazonaws.com/albums/burial_untrue.jpg')
imagefile4 = open('https://ravecave-seeds.s3.amazonaws.com/albums/shyeyez_bangersonly.jpg')
imagefile5 = open('https://ravecave-seeds.s3.amazonaws.com/albums/martyn_oneeye.jpg')

album1.artwork.attach(io: imagefile1, filename: 'imagefile1.jpg', content_type: 'image/jpeg')
album2.artwork.attach(io: imagefile2, filename: 'imagefile2.jpg', content_type: 'image/jpeg')
album3.artwork.attach(io: imagefile3, filename: 'imagefile3.jpg', content_type: 'image/jpeg')
album4.artwork.attach(io: imagefile4, filename: 'imagefile4.jpg', content_type: 'image/jpeg')
album5.artwork.attach(io: imagefile5, filename: 'imagefile5.jpg', content_type: 'image/jpeg')