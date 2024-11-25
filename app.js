const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

// Middleware to parse JSON bodies
app.use(express.json());

// Use our routes
app.use('/api/products', productRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});