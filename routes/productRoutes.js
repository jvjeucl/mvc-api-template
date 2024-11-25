const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// Get all products
router.get('/', ProductController.getAllProducts);

module.exports = router;