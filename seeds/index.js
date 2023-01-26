const sequelize = require('../config/connection');
const Manga = require('../models/manga');
const Favorite = require('../models/favorite');
const Artists = require('../models/artists');
const mangaData = require('./manga-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Manga.bulkCreate(mangaData, {
    individualHooks: true,
    returning: true,
  });
  await Favorite.bulkCreate(mangaData, {
    individualHooks: true,
    returning: true,
  });
  await Artists.bulkCreate(mangaData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();