const router = require('express').Router()
const { db, Album, Artist, Song } = require('../db')

// GET /api/albums
router.get('/', async (req,res,next) => {
  try {
    const albums = await Album.findAll({
      include: [{ model: Artist }]
    })

    res.json(albums)
  } catch (error) {next(error)}
})

// GET /api/albums/albumId

router.get('/:albumId', async (req,res,next) => {
  const albumId = req.params.albumId

  try {
    const album = await Album.findOne({
      where: { id: albumId },
      include: [{ model: Artist}, { model: Song }]
    })

    res.json(album)
  } catch (error) {
    next(error)
  }
})

module.exports = router
