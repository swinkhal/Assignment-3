const mongoose = require("mongoose");

const product = mongoose.Schema({
  name: String,
  category: String,
  price: String,
  imgurl: String,
  details: String,
});

const productSchema = mongoose.model("Products", product);

module.exports = productSchema;
