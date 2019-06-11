const Sequelize = require('sequelize')
const db = require('../db')


module.exports = db.define('albums', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  artworkUrl: {
    type: Sequelize.STRING,
    defaultValue: 'default-album.jpg'
  }
})
