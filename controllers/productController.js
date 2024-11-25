const ProductModel = require('../models/productModel');

const ProductController = {
    // Get all products
    getAllProducts: (req, res) => {
        const products = ProductModel.findAll();
        res.json(products);
    }
};

module.exports = ProductController;