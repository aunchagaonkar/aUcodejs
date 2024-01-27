function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      alert( i ); // a prime
    }
  }
let n = prompt("Enter a number to find all the prime numbers up to it");
showPrimes(n);