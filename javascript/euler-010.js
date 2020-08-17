'use es6';

const MAX = 2000000;

const isPrime = (num) => {
  for (var i = 2; i < Math.sqrt(num); i++) {
    if ((num / i) % 1 === 0) return false;
  }
  return true;
};

const primeSumBelow = (max) => {
  let current = max % 2 == 0 ? max - 1 : max;
  let sum = 0;

  while (current > 2) {
    if (isPrime(current)) sum += current;
    current -= 1;
  }
  return sum;
};

const primeSum = primeSumBelow(MAX);
console.log(`solution: ${primeSum}`);
