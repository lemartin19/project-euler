'use es6';

const MAX_RANGE = 20;

const factor = num => {
  let factors = []; 
  let i = 2;
  while (i <= Math.sqrt(num)) {
    if ((num / i) % 1 == 0) {
      factors = factors.concat(i);
      num = num / i;
    }
    else {
      i++;
    }
  }
  return factors.concat(num);
};

const combineSet = (set1, set2) => {
  const startIndex = {};
  let factors = set1;
  set2.forEach(val => {
    const index = set1.indexOf(val, startIndex[val] || 0);
    if (index >= 0) {
      startIndex[val] = index + 1;
    }
    else {
      factors = factors.concat(val);
    }
  });
  return factors;
};

const smallestNumberDivisibleForRange = max => {
  let allFactors = [];

  for (var i = 1; i < max; i++) {
    const factors = factor(i);
    allFactors = combineSet(allFactors, factors);
  }
  return allFactors.reduce((product, val) => product * val, 1);
};

const smallest = smallestNumberDivisibleForRange(MAX_RANGE);
console.log(`solution: ${smallest}`);