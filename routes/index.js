const router = require('express').Router();

const mangaRoutes = require('./manga-routes');

router.use('/', mangaRoutes);

module.exports = router;