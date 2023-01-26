const sequelize = require('../config/connection');
const seedManga = require('./mangaData.json')

const seedAll = async () => {
    await sequelize.sync({ force: true });
  
    await seedManga();
  
    process.exit(0);
  };
  
  seedDatabase();