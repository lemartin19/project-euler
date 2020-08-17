'use es6';

const NUM_DIVISORS = 500;

const primeFactors = (num) => {
  let factors = [];
  let factor = 2;

  while (num > 1) {
    if (num % factor === 0) {
      num = num / factor;
      factors = factors.concat(factor);
    } else {
      factor++;
    }
  }
  return factors;
};

const divisors = (num) => {
  const factors = primeFactors(num);
  return factors.reduce(
    (acc, num) =>
      acc.concat(
        acc
          .map((divisor) => divisor * num)
          .filter((divisor) => acc.indexOf(divisor) < 0)
      ),
    [1]
  );
};
const triangleNumberWithDivisors = (numDivisors) => {
  let triangleNum = 0;
  let diff = 1;

  while (divisors(triangleNum).length <= numDivisors) {
    triangleNum += diff;
    diff++;
  }
  return triangleNum;
};

console.log(`solution: ${triangleNumberWithDivisors(NUM_DIVISORS)}`);
