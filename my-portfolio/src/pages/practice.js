// ========== JavaScript Practice Guide ==========

// 1. Basic Data Types and Variables
console.log("=== Data Types and Variables ===");

let name = "John";
const age = 25;
let isStudent = true;
let hobbies = ["reading", "coding", "music"];
let person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 28
};

// Practice: Create and manipulate variables
let score = 85;
score += 5;  // Increment score
console.log("Score after increment:", score);

// 2. String Operations
console.log("\n=== String Operations ===");

let greeting = "Hello, World!";
console.log("Length:", greeting.length);
console.log("Uppercase:", greeting.toUpperCase());
console.log("Substring:", greeting.substring(0, 5));
console.log("Replace:", greeting.replace("Hello", "Hi"));

// Practice: String manipulation
let fullName = "John Smith";
let nameParts = fullName.split(" ");
console.log("First Name:", nameParts[0]);
console.log("Last Name:", nameParts[1]);

// 3. Arrays and Array Methods
console.log("\n=== Array Operations ===");

let fruits = ["apple", "banana", "orange"];
fruits.push("mango");        // Add to end
fruits.unshift("grape");     // Add to start
let lastFruit = fruits.pop(); // Remove from end

console.log("Fruits:", fruits);
console.log("Removed fruit:", lastFruit);

// Practice: Array methods
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
let evenNumbers = numbers.filter(num => num % 2 === 0);
let sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log("Doubled numbers:", doubled);
console.log("Even numbers:", evenNumbers);
console.log("Sum:", sum);

// 4. Functions
console.log("\n=== Functions ===");

// Regular function
function calculateArea(width, height) {
    return width * height;
}

// Arrow function
const calculatePerimeter = (width, height) => 2 * (width + height);

// Practice: Create and use functions
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}

console.log("Area:", calculateArea(5, 3));
console.log("Perimeter:", calculatePerimeter(5, 3));
console.log("Is 'radar' palindrome?", isPalindrome("radar"));
console.log("Is 'hello' palindrome?", isPalindrome("hello"));

// 5. Objects and Methods
console.log("\n=== Objects and Methods ===");

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2023,
    start: function() {
        return `${this.brand} ${this.model} is starting`;
    }
};

// Practice: Create and use objects
let student = {
    name: "Alice",
    grades: [85, 92, 78, 95],
    calculateAverage: function() {
        const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
        return sum / this.grades.length;
    }
};

console.log("Car:", car.start());
console.log("Student average:", student.calculateAverage());

// 6. Control Structures
console.log("\n=== Control Structures ===");

// If-else
function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    } else if (age >= 13) {
        return "Teenager";
    } else {
        return "Child";
    }
}

// Loops
console.log("For loop:");
for (let i = 1; i <= 3; i++) {
    console.log(`Count: ${i}`);
}

console.log("For...of loop:");
for (const fruit of fruits) {
    console.log(fruit);
}

// Practice: Loops and conditionals
function fizzBuzz(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}

console.log("FizzBuzz(15):", fizzBuzz(15));

// 7. Error Handling
console.log("\n=== Error Handling ===");

function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero!");
        }
        return a / b;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}

console.log("10/2 =", divideNumbers(10, 2));
console.log("10/0 =", divideNumbers(10, 0));

// 8. Async Programming
console.log("\n=== Async Programming ===");

// Promise example
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncExample() {
    console.log("Start");
    await delay(1000);
    console.log("After 1 second");
    await delay(1000);
    console.log("After 2 seconds");
}

// Run async example
asyncExample();

// Practice Exercises
console.log("\n=== Practice Exercises ===");

// Exercise 1: Create a function that finds the most frequent element in an array
function mostFrequent(arr) {
    let count = {};
    let maxCount = 0;
    let maxElement;

    for (let element of arr) {
        count[element] = (count[element] || 0) + 1;
        if (count[element] > maxCount) {
            maxCount = count[element];
            maxElement = element;
        }
    }
    return maxElement;
}

// Exercise 2: Create a function that checks if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Test exercises
let testArray = [1, 2, 2, 3, 3, 3, 4];
console.log("Most frequent element:", mostFrequent(testArray));
console.log("Is 17 prime?", isPrime(17));
console.log("Is 15 prime?", isPrime(15));
