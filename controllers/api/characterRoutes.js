const router = require('express').Router();
const { Character, DM } = require('../../models');

// router.post('/', async (req, res) => {
//     try {
//         router.get('/', async (req, res) => {
//             const DMData = await DM.findOne({
//                 // need work
//             })
//         })
//         const characterData = await Character.create({
//             dm_id_fk: DMData,
//             race: req.body.race,
//             class: req.body.class,
//             notes: req.body.notes,
//       });
//       res.status(200).json(characterData);
//     } catch (err) {
//       res.status(400).json(err);
//     }
// });

router.post('/:id', async (req, res) => {
    try {
        
        const DMData = await DM.findOne({
            where:{
              id: req.params.id
            },
        })

        if(!DMData){
            res.status(404).json({message: 'No DM with that id'})
        }
        
        const characterData = await Character.create({
            dm_id_fk: DMData.dataValues.id,
            race: req.body.race,
            class: req.body.class,
            notes: req.body.notes,
        });
        res.status(200).json(characterData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {

});

module.exports = router;