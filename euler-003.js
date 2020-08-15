'use es6';

const NUM = 600851475143;

// solution 1
const isPrime = num => {
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}

let largestFactor1 = Math.floor(Math.sqrt(NUM));
for (; largestFactor1 > 1; largestFactor1--) {
  if (NUM % largestFactor1 == 0 && isPrime(largestFactor1)) break;
}

// solution 2
const smallestPrimeFactor = num => {
  for (var i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) return i;
  }
  return num;
}

let largestFactor2 = NUM;
let smallestFactor = 1;
do {
  largestFactor2 = Math.floor(largestFactor2 / smallestFactor);
  smallestFactor = smallestPrimeFactor(largestFactor2);
} while (smallestFactor < largestFactor2);

console.log(`LINEAR TIME, CONSTANT SPACE\nsolution 1: ${largestFactor1}\nsolution 2: ${largestFactor2}`);