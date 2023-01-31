const router = require('express').Router();
const apiRoutes = require('./api');
const mangaRoutes = require('./api/mangaRoutes');

router.use('/mangas', mangaRoutes);

module.exports = router;