//recursive power function
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else if (exponent < 0) {
    return 1 / power(base, -exponent);
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(2, 1));

//recursive fibonacci sequence
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(10));
