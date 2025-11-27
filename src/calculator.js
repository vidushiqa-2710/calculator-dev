/**
 * @fileoverview Simple arithmetic functions.
 * This module exports basic calculator functions for use in the application.
 */

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract b from a
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide a by b
function divide(a, b) {
    if (b === 0) {
        // Use an Error object to allow testing for exceptions
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Export the functions for external use (e.g., testing)
module.exports = {
    add,
    subtract,
    multiply,
    divide
};