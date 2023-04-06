const { productNames } = require("../models/Product");
const Product = require("../models/Product");

const getProduct = (productId) => {
  return Product.findById(productId);
};

const getAllProducts = () => {
  return Product.find({});
};

const getProductsByCategory = (category) => {
  return Product.find({productCategory:category});
};

const createNewProduct = async (product) => {
  const newProduct = new Product(product);
  return newProduct.save();
};

module.exports = {
  getProduct,
  getAllProducts,
  getProductsByCategory,
  createNewProduct,
};
