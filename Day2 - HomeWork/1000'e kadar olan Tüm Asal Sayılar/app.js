console.log("1000'e kadar olan Tüm Asal Sayılar");
for (let i = 1; i <= 1000; i++) {
  let sayac = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      sayac++;
    }
    1;
  }
  if (sayac === 2) {
    console.log(i + " " + "Bir asal sayıdır.");
  }
}
