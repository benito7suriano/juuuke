const Sequelize = require('sequelize')
const db = require('../db')


module.exports = db.define('songs', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  audioUrl: {
    type: Sequelize.STRING
  },
  genre: {
    type: Sequelize.STRING
  }
})

