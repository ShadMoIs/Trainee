function zwei() {
  let Eingabe  = document.getElementById('Eingabe');
  var Ergebnis = Eingabe.value * Eingabe.value;
  alert("Das Quadrat von " + Eingabe.value + " = " + Ergebnis);
  Eingabe.value = 0;
 }

const los  = document.getElementById('los');
los.addEventListener ('click', Quadrat, true);
