const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Stats extends Model {}

Stats.init(
    {
        char_id_fk: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'character',
                key: 'id'
            }
        },
        strength: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        dexterity: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        constitution: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        intelligence: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        wisdom: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        charisma: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "stats",
    }
);

module.exports = Stats