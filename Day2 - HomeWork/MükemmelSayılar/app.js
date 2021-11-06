console.log("1000'e kadar olan Mükemmel Sayıları Bulma");
for (let i = 1000; i >= 1; i--) {
  let sayac = 0;
  for (let j = 1; j < i; j++) {
    if (i % j === 0) {
      sayac = sayac + j;
    }
  }
  if (sayac === i) {
    console.log(i + " " + "Mükemmel bir sayıdır.");
  }
}
