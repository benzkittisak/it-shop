const express = require("express");
const productRoute = express.Router();
const Products = require("../models/Product.model");

// GET ALL PRODUCT FROM DATABASES;

productRoute.route("/").get((req, res, next) => {
  Products.find((error, data) => {
    if (error) return next(error);
    res.json(data);
  });
});

// Create Product
productRoute.route("/create").post((req, res, next) => {
  Products.create(req.body, (error, data) => {
    if (error) return next(error);
    res.json(data);
  });
});

// Delete Product
productRoute.route("/del/:id").delete((req, res, next) => {
  Products.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) return next(error);
    res.json(data);
  });
});

// Update Product
productRoute.route("/update/:id").put((req, res, next) => {
  Products.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (error, data) => {
      if (error) return next(error);
      res.json(data);
    }
  );
});

module.exports = productRoute;
