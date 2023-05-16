const sequelize = require('../config/connection');

const {Category, Product, ProductTag, Tag} = require('../models');

const productSeedData = require('./productSeedData');
const categorySeedData = require ('./categorySeedData');
const productTagSeedData = require('./productTagSeedData');
const tagSeedData = require('./tagSeedData');


const seedDatabase = async () => {

    await sequelize.sync({ force: true });
    console.log('Seeding categories...');
    await Category.bulkCreate(categorySeedData);
    console.log('Seeding products...');
    await Product.bulkCreate(productSeedData);
    console.log('Seeding tags...');
    await Tag.bulkCreate(tagSeedData);
    console.log('Seeding product tags...');
    await ProductTag.bulkCreate(productTagSeedData);
  
    console.log('Seeding completed.');

  process.exit(0);

}

seedDatabase();
