// Import the Category model from the models directory
const { Category } = require('../models');

// Array of category data to be seeded into the database
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// Function to seed categories into the database using bulkCreate method
const seedCategories = () => Category.bulkCreate(categoryData);

// Export the seedCategories function to make it available for use in other files
module.exports = seedCategories;
