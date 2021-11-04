const { DM } = require('../models');

const dmData = [
  {
    username: 'banana', 
    password: 'bananajones'
  },
];

const seedDM = () => DM.bulkCreate(dmData);
seedDM();

module.exports = seedDM;