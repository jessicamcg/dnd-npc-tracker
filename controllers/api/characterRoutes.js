const router = require('express').Router();
const { Character, DM, Stats } = require('../../models');



router.post('/', async (req, res) => {
    try {

        const characterData = await Character.create({
            dm_id_fk: req.session.dm_id,
            name: req.body.name,
            race: req.body.race,
            class: req.body.class,
            notes: req.body.notes,
        });

        const statsData = await Stats.create({
            char_id_fk: characterData.id,
            strength: req.body.strength,
            dexterity: req.body.dexterity,
            constitution: req.body.constitution,
            intelligence: req.body.intelligence,
            wisdom: req.body.wisdom,
            charisma: req.body.charisma
        })

        const characterSheet = await Character.findAll({
            include: [{ model: Stats }]
          })

        res.status(200).json(characterSheet);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try{
      const characterSheet = await Character.findOne({
            where: {
                id: req.params.id
            }
        },
        {
            include: [{ model: Stats }]
        })
      if(!characterSheet){
        res.status(404).json({message: 'no character with that id'})
      }else{
        res.status(200).json(characterSheet);
      }
    } catch(err){
      res.status(400).json(err);
    }
  });
  
  router.get('/', async (req, res) => {
    try{
      const characterSheet = await Character.findAll({
        include: [{ model: Stats }]
      })
  
        const characters =  characterSheet.map((e) => e.get({plain:true}))
        res.render('homepage', {
          characters,
          loggedIn: req.body.loggedIn
        })
    } catch(err){
      res.status(400).json(err);
    }
  });

module.exports = router;