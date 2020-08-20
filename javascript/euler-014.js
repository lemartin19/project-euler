'use es6';

const MAX = 1000000;
const collatzNums = { '1': 1 };

const collatzLen = (num) => {
  if (!collatzNums[num]) {
    collatzNums[num] =
      num % 2 === 0 ? 1 + collatzLen(num / 2) : 1 + collatzLen(3 * num + 1);
  }
  return collatzNums[num];
};

const longestSeq = (maxVal) => {
  let longest = { val: 1, len: 1 };
  for (var curr = 2; curr < maxVal; curr++) {
    const currLen = collatzLen(curr);
    if (currLen > longest.len) {
      longest = { val: curr, len: currLen };
    }
  }

  return longest;
};

const { val, len } = longestSeq(MAX);
console.log(`solution: { val: ${val}, len: ${len} }`);
