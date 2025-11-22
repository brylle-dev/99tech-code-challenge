/**
 * open cmd
 * run: npx ts-node summation.ts
 */

// Iteration
function iterateSummation(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(`First: ${iterateSummation(5)}`); // 15

// Formula
function formulaSummation(n: number): number {
  return (n * (n + 1)) / 2;
}
console.log(`Second: ${formulaSummation(5)}`); // 15

// Recursion
function recursionSummation(n: number): number {
  if (n === 1) {
    return 1;
  }
  return n + recursionSummation(n - 1);
}
console.log(`Third: ${recursionSummation(5)}`); // 15
