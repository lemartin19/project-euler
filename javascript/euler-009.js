'use es6';

const TOTAL = 1000;

const pythagoreanTripleEqualTo = (max) => {
  let a = Math.floor(max / 3);

  while (a < max) {
    for (var b = 1; b <= a; b++) {
      let c = max - a - b;
      if (a ** 2 + b ** 2 === c ** 2) {
        return { a, b, c };
      }
    }
    a++;
  }

  return { a: 0, b: 0, c: 0 };
};

const { a, b, c } = pythagoreanTripleEqualTo(TOTAL);
console.log(`a: ${a}, b: ${b}, c: ${c}`);
console.log(`solution: ${a * b * c}`);
