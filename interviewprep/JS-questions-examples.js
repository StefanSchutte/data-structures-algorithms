/**
 * Write a function to check if a given string is a palindrome in JavaScript.
 * Implement a function that takes two arrays as arguments and returns their intersection (i.e., the elements that appear in both arrays) in JavaScript.
 * Create a function that takes a string as input and returns the count of each character in the string as an object in JavaScript.
 * Implement a function that calculates the factorial of a given number in JavaScript.
 * Write a function that accepts a number as input and returns true if it's a prime number, false otherwise, in JavaScript.
 * Create a function that sorts an array of integers in ascending order without using the built-in array sort method in JavaScript.
 * Implement a function that removes duplicates from an array in JavaScript.
 * Write a function to find the nth Fibonacci number in JavaScript.
 * Create a function that accepts an array of integers and returns the sum of all positive numbers in the array in JavaScript.
 * Implement a function that checks if a given year is a leap year in JavaScript.
 */


//1. Write a function to check if a given string is a palindrome in JavaScript.

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the clean string is equal to its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage:
const inputString = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(inputString)); // Output: true

/**
 * removes non-alphanumeric characters from the input string and converts it to lowercase.
 * Then, it compares the cleaned string with its reverse to determine if it's a palindrome.
 * If the cleaned string is equal to its reverse, the function returns true, indicating that the input string is a palindrome; otherwise, it returns false.
 */


//2. Implement a function that takes two arrays as arguments and returns their intersection (i.e., the elements that appear in both arrays) in JavaScript.

function arrayIntersection(arr1, arr2) {
    // Create a Set from the first array to store unique elements
    const set = new Set(arr1);

    // Filter the second array to include only elements present in the Set
    const intersection = arr2.filter(item => set.has(item));

    return intersection;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(arrayIntersection(array1, array2)); // Output: [3, 4, 5]
/**
 * function takes two arrays as arguments, creates a Set from the first array to store unique elements,
 * and then filters the second array to include only elements that are present in the Set.
 * Finally, it returns the resulting intersection array.
 */



//3. Create a function that takes a string as input and returns the count of each character in the string as an object in JavaScript.

function countCharacters(str) {
    // Create an empty object to store character counts
    const charCount = {};

    // Loop through each character in the string
    for (let char of str) {
        // Ignore spaces and non-alphanumeric characters
        if (char.match(/[a-zA-Z0-9]/)) {
            // Convert character to lowercase to handle case insensitivity
            char = char.toLowerCase();
            // Increment count for the current character
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }

    return charCount;
}

// Example usage:
const inputString = "Hello, World!";
console.log(countCharacters(inputString));
// Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
/**
 * This function initializes an empty object to store the character counts.
 * Then, it iterates through each character in the input string, ignoring spaces and non-alphanumeric characters.
 * For each valid character, it converts it to lowercase (to handle case insensitivity) and increments its count in the charCount object.
 * Finally, it returns the object containing the character counts.
 */



//4. Implement a function that calculates the factorial of a given number in JavaScript.

function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    }

    // Recursive case: factorial of n is n multiplied by factorial of (n-1)
    return n * factorial(n - 1);
}

// Example usage:
const number = 5;
console.log(factorial(number)); // Output: 120
/**
 * This function uses recursion to calculate the factorial of a given number.
 * The base case is when n equals 0, in which case the factorial is 1.
 * For any other positive integer n, the factorial is calculated by multiplying n with the factorial of (n-1).
 * The function continues to recursively call itself until it reaches the base case.
 */



//5. Write a function that accepts a number as input and returns true if it's a prime number, false otherwise, in JavaScript.

function isPrime(number) {
    // Prime numbers are greater than 1
    if (number <= 1) {
        return false;
    }

    // Check for divisibility from 2 to square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Example usage:
const number = 13;
console.log(isPrime(number)); // Output: true
/**
 * This function checks if the input number is greater than 1, as prime numbers are defined to be greater than 1.
 * Then, it iterates from 2 up to the square root of the number, checking if the number is divisible by any integer within this range.
 * If the number is divisible by any integer other than 1 and itself, it's not prime, so the function returns false.
 * If no such divisors are found, the number is prime, and the function returns true.
 */


//6. Create a function that sorts an array of integers in ascending order without using the built-in array sort method in JavaScript.

function bubbleSort(arr) {
    const len = arr.length;
    // Outer loop to traverse the array
    for (let i = 0; i < len - 1; i++) {
        // Inner loop to compare adjacent elements and swap if necessary
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
const numbers = [5, 3, 8, 1, 2, 7];
console.log(bubbleSort(numbers)); // Output: [1, 2, 3, 5, 7, 8]
/**
 * This function implements the Bubble Sort algorithm.
 * It iterates over the array multiple times, comparing adjacent elements and swapping them if they are in the wrong order.
 * This process is repeated until the array is sorted in ascending order.
 * Finally, it returns the sorted array.
 */



//7. Implement a function that removes duplicates from an array in JavaScript.

function removeDuplicates(arr) {
    // Create a Set to store unique elements
    const uniqueElements = new Set(arr);

    // Convert the Set back to an array
    const uniqueArray = Array.from(uniqueElements);

    return uniqueArray;
}

// Example usage:
const arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5];
console.log(removeDuplicates(arrayWithDuplicates)); // Output: [1, 2, 3, 4, 5]
/**
 * In this function, we first create a Set called uniqueElements, which automatically removes duplicate values from the input array arr.
 * Then, we convert this Set back to an array using Array.from(), resulting in an array with unique elements only.
 * Finally, we return this array containing no duplicates.
 */



//8. Write a function to find the nth Fibonacci number in JavaScript.

//Iterative Approach:
function fibonacciIterative(n) {
    let fibPrev = 0;
    let fibCurr = 1;

    for (let i = 2; i <= n; i++) {
        let temp = fibCurr;
        fibCurr = fibPrev + fibCurr;
        fibPrev = temp;
    }

    return fibCurr;
}

// Example usage:
const n = 6;
console.log(fibonacciIterative(n)); // Output: 8


// Recursive Approach:
function fibonacciRecursive(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Example usage:
const n = 6;
console.log(fibonacciRecursive(n)); // Output: 8
/**
 * Both functions take an integer n as input and return the nth Fibonacci number.
 * The iterative approach uses a loop to calculate the Fibonacci numbers up to the nth number,
 * while the recursive approach uses the Fibonacci sequence definition directly.
 * Both methods yield the same result, but the recursive approach may be less efficient
 * for large values of n due to the repeated calculation of overlapping subproblems.
 */



//9. Create a function that accepts an array of integers and returns the sum of all positive numbers in the array in JavaScript.

function sumOfPositiveNumbers(arr) {
    // Initialize a variable to store the sum
    let sum = 0;

    // Loop through each element of the array
    for (let num of arr) {
        // Check if the number is positive
        if (num > 0) {
            // Add the positive number to the sum
            sum += num;
        }
    }

    return sum;
}

// Example usage:
const numbers = [1, -2, 3, -4, 5];
console.log(sumOfPositiveNumbers(numbers)); // Output: 9 (1 + 3 + 5 = 9)
/**
 * This function iterates through each element of the array and checks if the element is positive. If it is, the positive number is added to the sum variable.
 * Finally, the function returns the sum of all positive numbers in the array.
 */



//10. Implement a function that checks if a given year is a leap year in JavaScript.

function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // Check if the year is divisible by 100 and not divisible by 400
        if (year % 100 === 0 && year % 400 !== 0) {
            return false;
        }
        return true;
    }
    return false;
}

// Example usage:
const year = 2024;
console.log(isLeapYear(year)); // Output: true

/**
 * This function first checks if the year is divisible by 4.
 * If it is, it further checks if the year is divisible by 100 but not divisible by 400, in which case it returns false because it's not a leap year.
 * Otherwise, if the year is divisible by 4 and either not divisible by 100 or divisible by 400, it returns true indicating that it's a leap year.
 * Otherwise, it returns false.
 */

