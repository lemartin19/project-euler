'use es6';

const MAX = 4000000;

// linear time
let odd1 = 1;
let even = 2;
let odd2 = odd1 + even;
let sum = 0;

while (even < MAX) {
  sum += even;
  odd1 = even + odd2;
  even = odd2 + odd1;
  odd2 = odd1 + even;
}

console.log(`LINER TIME, CONSTANT SPACE\nsolution: ${sum}`);
