'use es6';

const MAX = 1000;
const NUM1 = 3;
const NUM2 = 5;

// simplest
let sum1 = 0;
for (var i = 0; i < MAX; i++) {
  sum1 += i % NUM1 == 0 || i % NUM2 == 0 ? i : 0;
}

let sum2 = 0;
for (var i = 0; i < MAX; i += NUM1) {
  sum2 += i % NUM2 == 0 ? 0 : i;
}
for (var i = 0; i < MAX; i += NUM2) {
  sum2 += i;
}

// math-y
const sequenceSum = (min, max, num) => (num * (min + max)) / 2;

const largestNumUnderMax = (skip, max) => max - (max % skip);

const forThis = (num) =>
  sequenceSum(
    num,
    largestNumUnderMax(num, MAX - 1),
    Math.floor((MAX - 1) / num)
  );

const sum3 = forThis(NUM1) + forThis(NUM2) - forThis(NUM1 * NUM2);

console.log(
  `LINER TIME, CONSTANT SPACE\nsolution 1: ${sum1}\nsolution 2: ${sum2}`
);
console.log(`CONSTANT TIME, CONSTANT SPACE\nsolution: ${sum3}`);
