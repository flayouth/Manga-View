const sequelize = require('../config/connection');
const Manga = require('../models/manga');
const mangaData = require('./manga-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Manga.bulkCreate(mangaData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
