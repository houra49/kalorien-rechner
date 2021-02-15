let größe = document.getElementById("größe");
let alter = document.getElementById("alter");
let gewicht = document.getElementById("gewicht");
let faru = document.getElementById("frauen");
let mann = document.getElementById("männer");
let aktivität = document.getElementById("aktivität");
let GrKcal = document.getElementById("GrEr-kcal");
let GeKcal = document.getElementById("GeEr-kcal");
let GrKj = document.getElementById("GrEr-kj");
let GeKj = document.getElementById("GeEr-kj");
function kalorienRechner() {
    let grundUmsatz;
    let gesamtUmsatz;
    if (faru.checked) {
        grundUmsatz = 655.1 + (9.6 * gewicht.value) + (1.8 * größe.value) - (4.7 * alter.value);
    } else if (mann.checked) {
        grundUmsatz = 664.7 + (13.7 * gewicht.value) + (5 * größe.value) - (6.8 * alter.value);
    };
    if (aktivität.value === "schlafen") {
        gesamtUmsatz = grundUmsatz * 0.95;
    } else if (aktivität.value === "sitzen") {
        gesamtUmsatz = grundUmsatz * 1.2;
    } else if (aktivität.value === "freizeit") {
        gesamtUmsatz = grundUmsatz * 1.5;
    } else if (aktivität.value === "sitzendetätigkeit") {
        gesamtUmsatz = grundUmsatz * 1.7;
    } else if (aktivität.value === "stehendetätigkeit") {
        gesamtUmsatz = grundUmsatz * 1.9;
    } else if (aktivität.value === "arbeit") {
        gesamtUmsatz = grundUmsatz * 2.10;
    }
    // kilocalories zu kilojoules:
    let grundUmsatzKj = grundUmsatz * 4.184
    let gesamtUmsatzKJ = gesamtUmsatz * 4.184

    GrKcal.innerHTML = grundUmsatz.toFixed(2);
    GeKcal.innerHTML = gesamtUmsatz.toFixed(2);
    GrKj.innerHTML = grundUmsatzKj.toFixed(2);
    GeKj.innerHTML = gesamtUmsatzKJ.toFixed(2);
}