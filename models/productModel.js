const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 699 }
];

// Simple functions to work with our data
const ProductModel = {
    // Get all products
    findAll: () => {
        return products;
    }
};

module.exports = ProductModel;