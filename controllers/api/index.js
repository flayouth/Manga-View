const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./mangaRoutes');

router.use('/users', userRoutes);
router.use('/mangas', projectRoutes);

module.exports = router;