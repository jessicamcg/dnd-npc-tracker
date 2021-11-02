const { Character,Stats,DM } = require('../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
      const characterData = await Character.findAll({
        // where: {
        //   dm_id_fk: req.session.dm_id,
        // },
        // include: [{ model:Stats }]
      });
      const characters = characterData.map((character) => {
        return character.get({ plain:true })
      });

      res.render('homepage', {
        characters,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.get('/character/:id', async (req, res) => {
  res.render('character-sheet', {
    loggedIn: req.session.loggedIn,
  });
})

router.get('/character-create', (req,res) =>{
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }

  res.render('character-create');
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
});
  

module.exports = router;