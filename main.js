let celciusInput = document.querySelector(".celcius > input");
let fahrenheitInput = document.querySelector(".fahrenheit > input");
let kalvinInput = document.querySelector(".kalvin > input");
let btn = document.querySelector(".button button");

function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

/*   Celcius to Fahrenheit and Kelvin  */
celciusInput.addEventListener("input", function () {
  let cTemp = parseFloat(celciusInput.value);
  let fTemp = cTemp * (9 / 5) + 32;
  let kTemp = cTemp + 273.15;
  fahrenheitInput.value = roundNumber(fTemp);
  kalvinInput.value = roundNumber(kTemp);
});

/* Kelvin to Celcius and Fohrenheit */
kalvinInput.addEventListener("input", function () {
  let kTemp = parseFloat(kalvinInput.value);
  let cTemp = kTemp - 237.15;
  let fTemp = (kTemp - 237.15) * (9 / 5) + 32;
  celciusInput.value = roundNumber(cTemp);
  fahrenheitInput.value = roundNumber(fTemp);
});

/* Fahrenheit to Celcius and Kelvin  */
fahrenheitInput.addEventListener("input", function () {
  let fTemp = parseFloat(fahrenheitInput.value);
  let cTemp = (fTemp - 32) * (5 / 9);
  let kTemp = (fTemp - 32) * (5 / 9) + 273.15;
  celciusInput.value = roundNumber(cTemp);
  kalvinInput.value = roundNumber(kTemp);
});

btn.addEventListener("click", () => {
  celciusInput.value = "";
  fahrenheitInput.value = "";
  kalvinInput.value = "";
});
