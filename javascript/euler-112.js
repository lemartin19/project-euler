'use es6';

const PERCENT = 0.99;
const MAX_STEP_SIZE = 100000;
const MAX_ITER = 10000000;

const increasing = (prev, next) => prev === undefined || prev <= next;
const decreasing = (prev, next) => prev === undefined || prev >= next;

const getStartFromPercentage = percentage => {
  /* Confirmed that these are the first times for which the percentage of bouncy numbers goes this this high */
  if (percentage >= 0.9) return { current: 21780, numBouncy: 21780 * 0.9};
  if (percentage >= 0.75) return { current: 3088, numBouncy: 3088 * 0.75};
  if (percentage >= 0.5) return { current: 538, numBouncy: 538 * 0.5};
  if (percentage > 0) return { current: 100, numBouncy: 0};
  return { current: 1, numBouncy: 0 };
};

const isBouncy = num => {
  const numArr = String(num).split('').map(val => Number(val));
  const isAll = (arr, comparator) => arr.reduce(({ prev, soFar }, curr) => ({ prev: curr, soFar: comparator(prev, curr) && soFar}), { soFar: true });
  const { soFar: isIncreasing } = isAll(numArr, increasing);
  const { soFar: isDecreasing } = isAll(numArr, decreasing);
  return !(isIncreasing || isDecreasing);
};

const bruteForceSearchPercent = percentage => {
  let { current, numBouncy } = getStartFromPercentage(percentage);
  let iter = 0;

  while ((numBouncy / current) !== percentage && iter < MAX_ITER) {
    current++;
    if (isBouncy(current)) numBouncy++;
    iter++;
  }
  return (numBouncy / current) !== percentage ? null : current;
};

const percent = bruteForceSearchPercent(0.99);
console.log(`solution: ${percent}`);