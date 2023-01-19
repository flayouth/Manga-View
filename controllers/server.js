const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./manga-routes');

router.use('/', mangaRoutes);
router.use('/api', apiRoutes);

module.exports = router;