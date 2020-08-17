'use es6';

const N = 10001;

const isPrime = (num) => {
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if ((num / i) % 1 == 0) return false;
  }
  return true;
};

const nthPrime = (n) => {
  let current = 1;
  let i = 1;
  while (i < n) {
    current += 2;
    if (isPrime(current)) i++;
  }
  return current;
};

console.log(`solution: ${nthPrime(N)}`);
