console.log("Arkadaş Sayı Bulma");
function friendNumbers(number1, number2) {
  let sayac = 0;
  for (let i = 1; i < number1; i++) {
    if (number1 % i === 0) {
      sayac = sayac + i;
    }
  }
  if (sayac === number2) {
    console.log(
      number1 + " " + "ve" + " " + number2 + " " + "Arkadaş sayılardır"
    );
  } else
    console.log("Arkadaş sayı değiller " + number1 + " " + "ve " + number2);
}
friendNumbers(220, 284);
