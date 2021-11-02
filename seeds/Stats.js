const { Stats } = require('../models');

const statsData = [
  {
    char_id_fk: '',
    strength: 3,
    dexterity: 1,
    constitution: 20,
    intelligence: 5,
    charisma: 7,
  },
  {
    char_id_fk: '',
    strength: 5,
    dexterity: 2,
    constitution: 15,
    intelligence: 3,
    charisma: 2,
  },
  {
    char_id_fk: '',
    strength: 14,
    dexterity: 12,
    constitution: 8,
    intelligence: 7,
    charisma: 1,
  },
  {
    char_id_fk: '' ,
    strength: 20,
    dexterity: 6,
    constitution: 2,
    intelligence: 10,
    charisma: 11,
  },
  {
    char_id_fk: '',
    strength: 12,
    dexterity: 2,
    constitution: 3,
    intelligence: 13,
    charisma: 17,
  },
];

const seedStats = () => Stats.bulkCreate(statsData);
seedStats();
module.exports = seedStats;