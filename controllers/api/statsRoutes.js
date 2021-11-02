const router = require('express').Router();
const { Stats } = require('../../models');


router.get('/', async (req, res) => {
    try {
        
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;