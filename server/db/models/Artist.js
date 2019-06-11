const Sequelize = require('sequelize')
const db = require('../db')


module.exports = db.define('artists', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
