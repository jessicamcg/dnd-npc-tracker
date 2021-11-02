const { DM } = require('../models');

const dmData = [
  {
    username: '', 
    password: 'powpow'
  },
  {
    username: '', 
    password: 'powpow'
  },
  {
    username: '', 
    password: 'powpow'
  },
  {
    username: '', 
    password: 'powpow'
  },
  {
    username: '', 
    password: 'powpow'
  },
];

const seedDM = () => DM.bulkCreate(dmData);

module.exports = seedDM;