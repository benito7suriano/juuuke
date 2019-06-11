const router = require('express').Router()

// connect your API routes here!
router.use('/albums', require('./albums'))
// router.use('/artists', require('./artists'))
// router.use('/songs', require('./songs'))

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
