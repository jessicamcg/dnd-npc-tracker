const DM = require('./dm');
const Character = require('./character');
const Stats = require('./stats');

DM.hasMany(Character, {
    foreignKey: 'dm_id_fk',
});

Character.belongsTo(DM, {
    foreignKey: 'dm_id_fk',
})

Character.hasOne(Stats, {
    foreignKey: 'char_id_fk',
    onDelete: 'CASCADE',
});

Stats.belongsTo(Character, {
    foreignKey: 'char_id_fk',
})

module.exports = { DM, Character, Stats};