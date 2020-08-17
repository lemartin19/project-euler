'use es6';

const MAX = 100;

const reduceRange = (max, fn) => {
  let sum = 0;
  for (var i = 1; i <= max; i++) {
    sum += fn(i);
  }
  return sum;
};

const difference = reduceRange(MAX, val => val) ** 2 - reduceRange(MAX, val => val ** 2);
console.log(`solution: ${difference}`);