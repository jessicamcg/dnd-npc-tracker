const router = require('express').Router();
const DMRoutes = require('./DMRoutes');
const characterRoutes = require('./characterRoutes');
const statsRoutes = require('./statsRoutes');

router.use('/DMs', DMRoutes);
router.use('/character', characterRoutes);
router.use('/stats', statsRoutes);

module.exports = router;
