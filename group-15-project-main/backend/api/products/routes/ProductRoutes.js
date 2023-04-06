const express = require("express");
const router = express.Router();
const ProductService = require("../services/ProductService");


router.get("/", (req, res) => {
  ProductService.getAllProducts()
    .then((products) => {
      if (products.length > 0) {
        res.status(200).json({
          message: "Success",
          products: products,
        });
      } else {
        res.status(404).json({
          message: "Product fetch failed",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
});

router.get("/product/:productId", (req, res) => {
  ProductService.getProduct(req.params.productId)
    .then((product) => {
      if (product) {
        return res.status(200).json({
          message: "Success",
          product: product,
        });
      } else {
        return res.status(404).json({
          message: "No such product found",
        });
      }
    })
    .catch((err) => {
      return res.status(500).json({
        message: "Something went wrong, please try again",
      });
    });
});

router.get("/product/category/:category", (req, res) => {
  ProductService.getProductsByCategory(req.params.category)
    .then((products) => {
      if (products.length > 0) {
        res.status(200).json({
          message: "Products in this category retrieved",
          products: products,
        });
      } else {
        res.status(404).json({
          message: "No Products in this category found",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
        success: false,
      });
    });
}); 

router.post("/", (req, res) => {
  const product = req.body;
  if (product) {
    ProductService.createNewProduct(product)
      .then((newProduct) => {
        res.status(200).json({
          message: "Product successfully added",
        });
      })
      .catch((err) => {
        res.status(400).json({
          message: err.message,
        });
      });
  } else {
    res.status(500).json({
      message: "Product couldn't be added",
    });
  }
});

module.exports = router;
