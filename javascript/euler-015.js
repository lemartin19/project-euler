/*
This is a permutation problem - in an MxN grid, there must be M "right" and N "down".
Therefore, all that matters is the order of those "right"s and "down"s

In reality, if you assume that it is an NxN grid, then you are just choosing the
locations of one of those (e.g. only choosing where you go down). Therefore, you can
calculate this with choose N of 2N.
*/

const N_GRID = 20;

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

const latticePaths = (n) => {
  const denom = factorial(n) ** 2;
  return factorial(2 * n) / denom;
};

console.log(`solution: ${latticePaths(N_GRID)}`);
