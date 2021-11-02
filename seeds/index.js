const seedDM = require('./DM');
const seedCharacter = require('./Character');
const seedStats = require('./Stats');


const sequelize = require('../config/connection');

    const seedAll = async () => {
        await sequelize.sync({ force: true });
        console.log('\n----- DATABASE SYNCED -----\n');
        await seedDM();
        console.log('\n----- DM SEEDED -----\n');
      
        await seedCharacter();
        console.log('\n----- CHARACTERS SEEDED -----\n');
      
        await seedStats();
        console.log('\n----- STATS SEEDED -----\n');
      
        process.exit(0);
      };

seedAll();