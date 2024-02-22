// Import the seed functions for categories, products, tags, and product tags
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

// Import the Sequelize instance for database connection
const sequelize = require('../config/connection');


// Define the main seeding function
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  // Seed categories into the database
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  // Seed products into the database
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  // Seed tags into the database
  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  // Seed product tags into the database
  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  // Exit the process after seeding is complete
  process.exit(0);
};

// Call the seedAll function to start the seeding process
seedAll();
