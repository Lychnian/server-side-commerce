// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE', // Delete associated products when a category is deleted
  onUpdate: 'CASCADE' // Update associated products when a category is updated
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE', // Delete associated products when a category is deleted
  onUpdate: 'CASCADE' // Update associated products when a category is updated
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag, 
  foreignKey: 'product_id',
  onDelete: 'CASCADE', // Delete associated tags when a product is deleted
  onUpdate: 'CASCADE' // Update associated tags when a product is updated
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
  onDelete: 'CASCADE', // Delete associated products when a tag is deleted
  onUpdate: 'CASCADE' // Update associated products when a tag is updated
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
