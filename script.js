// script.js

// Functionality for MarketX Marketplace

// 1. Authentication
class Auth {
    constructor() {
        this.users = [];
    }

    register(username, password) {
        const user = { username, password };
        this.users.push(user);
        return `User ${username} registered successfully!`;
    }

    login(username, password) {
        const user = this.users.find(u => u.username === username && u.password === password);
        return user ? `User ${username} logged in!` : 'Invalid credentials!';
    }
}

// 2. Product Management
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(name, price) {
        const product = new Product(name, price);
        this.products.push(product);
        return `${name} added to the store!`;
    }

    listProducts() {
        return this.products;
    }
}

// 3. Currency Conversion
const CurrencyConverter = {
    rates: {
        USD: 1,
        EUR: 0.85,
        GBP: 0.75
    },

    convert(amount, fromCurrency, toCurrency) {
        if (fromCurrency === toCurrency) return amount;
        return (amount * this.rates[toCurrency] / this.rates[fromCurrency]).toFixed(2);
    }
};

// 4. WhatsApp Integration
function sendWhatsAppMessage(message, phoneNumber) {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(url, '_blank');
}

// Example Usage
const auth = new Auth();
auth.register('john_doe', 'password123');
auth.login('john_doe', 'password123');

const productManager = new ProductManager();
productManager.addProduct('Laptop', 1000);
console.log(productManager.listProducts());

const convertedAmount = CurrencyConverter.convert(100, 'USD', 'EUR');
console.log(`Converted Amount: €${convertedAmount}`);

sendWhatsAppMessage('Hello, this is a test.', '1234567890');
