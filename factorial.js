/**
 * Factorial
 * https://es.wikipedia.org/wiki/Factorial
 */
let factorial = function (n) {
  if (n === 0) {
    return 1
  }

  return n * factorial(n-1);
}

console.log(factorial (4));