const sequelize = require('../config/connection');

const {Category, Product, ProductTag, Tag} = require('../models');

const productSeedData = require('./productSeedData');
const categorySeedData = require ('./catergorySeedData');
const productTagSeedData = require('./productTagSeedData');
const tagSeedData = require('./tagSeedData');


const seedDatabase = async () => {

    await sequelize.sync({ force: true });

    await Category.bulkCreate(categorySeedData);
  
    await Product.bulkCreate(productSeedData);
  
    await Tag.bulkCreate(tagSeedData);
  
    await ProductTag.bulkCreate(productTagSeedData);
  


  process.exit(0);

}

seedDatabase();
