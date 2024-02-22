// Import necessary components from the Sequelize library
const { Model, DataTypes } = require('sequelize');

// Import the database connection
const sequelize = require('../config/connection.js');

// Define the Category model
class Category extends Model {}

// Initialize the Category model
Category.init(
  {
  // Define Columns
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  category_name: {
    type: DataTypes.STRING,
  },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// Exports the Category model
module.exports = Category;
