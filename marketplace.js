// marketplace.js

// Functionality for product listing
function listProducts(products) {
    return products.map(product => `${product.name} - ${product.price}`).join('\n');
}

// Functionality for category filtering
function filterByCategory(products, category) {
    return products.filter(product => product.category === category);
}

// Functionality for currency conversion
function convertCurrency(price, rate) {
    return price * rate;
}

// Functionality for product upload
function uploadProduct(newProduct, productList) {
    productList.push(newProduct);
    return productList;
}

// Functionality for product rating
function rateProduct(productId, rating, products) {
    const product = products.find(p => p.id === productId);
    if (product) {
        product.rating = rating;
    }
    return products;
}

// Example Usage:
const products = [
    { id: 1, name: 'Product 1', price: 100, category: 'Electronics', rating: 0 },
    { id: 2, name: 'Product 2', price: 200, category: 'Books', rating: 0 },
];

console.log(listProducts(products));

const filteredProducts = filterByCategory(products, 'Electronics');
console.log(listProducts(filteredProducts));

const convertedPrice = convertCurrency(100, 1.1);
console.log(`Converted Price: ${convertedPrice}`);

const updatedProducts = uploadProduct({ id: 3, name: 'Product 3', price: 300, category: 'Books' }, products);
console.log(listProducts(updatedProducts));

const ratedProducts = rateProduct(1, 5, updatedProducts);
console.log(ratedProducts);