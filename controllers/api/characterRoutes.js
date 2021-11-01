const router = require('express').Router();
const { Character, DM } = require('../../models');

router.post('/', async (req, res) => {
    try {
        router.get('/', async (req, res) => {
            const DMData = await DM.findOne({
                
            })
        })
        const characterData = await Character.create({
            dm_id_fk: DMData,
            race: req.body.race,
            class: req.body.class,
            notes: req.body.notes,
      });
      res.status(200).json(characterData);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {

});

module.exports = router;