console.log("Asal Sayı Bulma");

function findPrime(...numbers) {
  let counter;
  for (let i = 0; i < numbers.length; i++) {
    counter = 0;
    for (let j = 1; j <= numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        counter++;
      }
    }
    if (counter == 2) {
      console.log(numbers[i]);
    }
  }
}
findPrime(2, 5, 8, 21, 13, 41, 34, 54, 97, 16, 24, 46, 49);