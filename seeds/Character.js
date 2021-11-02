const { Character } = require('../models');

const characterData = [
  {
    dm_id_fk: '' ,
    name: 'target',
    race:'Dwarf',
    met_party: true ,
    class: 'barbarian' ,
    notes: 'wow'
  },
  {
    dm_id_fk:'' ,
    name: 'Shirts',
    race: "Elf",
    met_party: true ,
    class:'Druid' ,
    notes: 'ok'
  },
  {
    dm_id_fk: '' ,
    name: 'Jason',
    race: "Tiefling",
    met_party: false ,
    class:'Cleric',
    notes: 'ok'
  },
  {
    dm_id_fk: '' ,
    name: 'POWPOW',
    race: "Gnome",
    met_party:true  ,
    class:'Rogue' ,
    notes: 'very good'
  },
  {
    dm_id_fk: '' ,
    name: 'BANANAMAN',
    race: "Dragonborn",
    met_party: false ,
    class:'Wizard' ,
    notes: 'bad'
  },
];

const seedCharacter = () => Character.bulkCreate(characterData);
seedCharacter();
module.exports = seedCharacter;