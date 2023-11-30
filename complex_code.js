/*  filename: complex_code.js
    description: This code generates a custom numerical sequence based on a mathematical algorithm.
*/

// Function to calculate the nth term of a custom numerical sequence
function customSequence(n) {
  // Check for base cases
  if (n == 1) return 1;
  if (n == 2) return 2;

  // Initialize variables
  let a = 1;
  let b = 2;
  let c;

  // Generate the sequence
  for (let i = 3; i <= n; i++) {
    c = 2 * a + b;
    a = b;
    b = c;
  }

  return c;
}

// Function to validate if a number is prime
function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

// Function to generate the sequence of primes up to a given limit
function primeSequence(limit) {
  let primes = [];

  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

// Generate the first 10 numbers of the custom sequence
console.log("Custom Sequence:");
for (let i = 1; i <= 10; i++) {
  console.log("Term " + i + ": " + customSequence(i));
}

// Generate the first 20 prime numbers
console.log("\nPrime Numbers:");
const primes = primeSequence(20);
console.log(primes.join(", "));

// Calculate the sum of the first 100 terms of the custom sequence
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += customSequence(i);
}
console.log("\nSum of the first 100 terms: " + sum);

// Find the smallest prime number greater than 1000
let nextPrime = 1001;
while (!isPrime(nextPrime)) {
  nextPrime++;
}
console.log("\nSmallest prime number greater than 1000: " + nextPrime);

// Generate a random number between 0 and 1, and round it to 3 decimal places
const randomNum = Math.round(Math.random() * 1000) / 1000;
console.log("\nRandom Number: " + randomNum.toFixed(3));