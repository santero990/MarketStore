// auth.js

const users = []; // This is a simple in-memory user store, replace with your database logic.

// Function for user registration
function register(username, password) {
    if (users.find(user => user.username === username)) {
        throw new Error('User already exists');
    }
    const newUser = { username, password }; // Store hashed password in production
    users.push(newUser);
    return newUser;
}

// Function for user login
function login(username, password) {
    const user = users.find(user => user.username === username);
    if (!user || user.password !== password) { // Replace with hashed password comparison
        throw new Error('Invalid username or password');
    }
    return user;
}

// Function for retrieving user details
function getUser(username) {
    const user = users.find(user => user.username === username);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
}

// Exporting the functions
module.exports = { register, login, getUser };