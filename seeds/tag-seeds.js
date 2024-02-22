// Import the Tag model from the models directory
const { Tag } = require('../models');

// Array of tag data to be seeded into the database
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

// Function to seed tags into the database using bulkCreate method
const seedTags = () => Tag.bulkCreate(tagData);

// Export the seedTags function to make it available for use in other files
module.exports = seedTags;
