const router = require('express').Router()
const { db, Album, Artist, Song } = require('../db')

// GET /api/albums
router.get('/', async (req,res,next) => {
  try {
    const albums = await Album.findAll({
      include: [{ model: Artist }]
    })

    res.send(albums)
  } catch (error) {next(error)}
})

module.exports = router
