function factorial(n) {
  let factorialRezult = 1;
  for (let i = 1; i <= n; i++) {
    factorialRezult *= i;
  }
  return factorialRezult;
}

factorial(5);
