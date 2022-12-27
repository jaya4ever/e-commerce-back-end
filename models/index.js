// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: {
    name: 'product_id',
    unique: false,
  }
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: {
    name: 'category_id',
    unique: false,
  }
});

// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
  foreignKey: {
    name: 'tag_id',
    unique: false,
  }
});

// Tags belongToMany Products (through ProductTag)
Tag.hasMany(Product, {
  foreignKey: {
    name: 'tag_id',
    unique: false,
  }
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
