const db = require('./db')

// require each of your models here...
const { Album, Artist, Song } = require('./models')

// ...and give them some nice associations here!
Album.hasMany(Song)
Song.belongsTo(Album)

Artist.hasMany(Song)
Song.belongsTo(Artist)

Artist.hasMany(Album)
Album.belongsTo(Artist)

module.exports = {
  db,
  Album,
  Artist,
  Song
}
