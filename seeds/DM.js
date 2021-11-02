const { DM } = require('../models');

const dmData = [
  {
    username: 'capsulewar2', 
    password: 'powpow'
  },
  {
    username: 'BossyLemon2', 
    password: 'spapytappy3'
  },
  {
    username: 'Nickolascage', 
    password: 'elfshelf2'
  },
  {
    username: 'FridaBandita', 
    password: 'gnomeygnome2'
  },
  {
    username: 'Drgaonfly', 
    password: 'dragonson95'
  },
];

const seedDM = () => DM.bulkCreate(dmData);
seedDM();

module.exports = seedDM;