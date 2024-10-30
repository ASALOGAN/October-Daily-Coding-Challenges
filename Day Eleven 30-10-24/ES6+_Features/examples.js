// 1. Destructuring (Array & Object):

// Example of Array Destructuring

// Old method of extracting values from an array
let array = [1, 2, 3]; // Define an array with three elements
let first = array[0]; // Access the first element of the array
let second = array[1]; // Access the second element of the array
let third = array[2]; // Access the third element of the array (Fixed typo from 'arrau' to 'array')

console.log(first, second, third); // Output: 1 2 3

// New ES6 method using array destructuring
const [a, b, c] = [1, 2, 3]; // Destructure the array into variables a, b, and c

console.log(a, b, c); // Output: 1 2 3

// Example of Object Destructuring

// Old method of extracting properties from an object
var person = { name: 'John', age: 30 }; // Define an object with properties name and age
var name = person.name; // Access the name property of the object
var age = person.age; // Access the age property of the object

console.log(name, age); // Output: John 30

// New ES6 method using object destructuring
const { name: personName, age: personAge } = { name: 'John', age: 30 }; // Destructure the object into variables personName and personAge

console.log(personName, personAge); // Output: John 30

// 2. Arrow Functions:

// Old method of defining functions
function add(x, y) {
    return x + y;
}

console.log(add(5, 3)); // Output: 8

// New ES6 method using arrow functions
const addArrow = (x, y) => x + y;

console.log(addArrow(5, 3)); // Output: 8

// Old method of defining functions with no parameters
function greet() {
    return 'Hello, World!';
}

console.log(greet()); // Output: Hello, World!

// New ES6 method using arrow functions with no parameters
const greetArrow = () => 'Hello, World!';

console.log(greetArrow()); // Output: Hello, World!

// Old method of defining functions with a single parameter
function square(n) {
    return n * n;
}

console.log(square(4)); // Output: 16

// New ES6 method using arrow functions with a single parameter
const squareArrow = n => n * n;

console.log(squareArrow(4)); // Output: 16


// 3. Spread and Rest Operators:

// Old method of combining arrays
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var combinedArr = arr1.concat(arr2);

console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

// New ES6 method using spread operator
const newCombinedArr = [...arr1, ...arr2];

console.log(newCombinedArr); // Output: [1, 2, 3, 4, 5, 6]

// Old method of adding elements to an array
var arr3 = [1, 2, 3];
arr3.push(4, 5, 6);

console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]

// New ES6 method using spread operator
const arr4 = [1, 2, 3];
const newArr4 = [...arr4, 4, 5, 6];

console.log(newArr4); // Output: [1, 2, 3, 4, 5, 6]

// Old method of collecting function arguments
function sum() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// New ES6 method using rest operator
const sumRest = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sumRest(1, 2, 3, 4)); // Output: 10

// Old method of extracting remaining elements
var array2 = [1, 2, 3, 4, 5];
var firstOld = array2[0];
var secondOld = array2[1];
var rest = array2.slice(2);

console.log(firstOld, secondOld, rest); // Output: 1 2 [3, 4, 5]

// New ES6 method using rest operator
const [firstNew, secondNew, ...restNew] = [1, 2, 3, 4, 5];

console.log(firstNew, secondNew, restNew); // Output: 1 2 [3, 4, 5]
