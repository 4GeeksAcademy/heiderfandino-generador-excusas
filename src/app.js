
let who = [
  "El perro",
  "Mi vecino",
  "Mi caballo",
  "Mi ex",
  "Mi suegra",
  "El extraterrestre",
  "Mi cerebro"
];
let what = [
  "salio volando",
  " se bugeo",
  " exploto",
  "fallo",
  " se durmio",
  "se murio",
  "se auto-destruyo"
];
let when = [
  "cuando me cai.",
  "cuando jugaba.",
  "cuando estaba de fiesta.",
  "cuando lo compre.",
  "cuando lo vi.",
  "cuando lo use.",
  "cuando lo toque."
];

function generarExcusa() {
  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  return who[whoIndex] + " " + what[whatIndex] + " " + when[whenIndex];
}
function mostrarExcusa() {
  let excusa = generarExcusa();
  document.getElementById("excusa").innerText = excusa;
}

window.onload = mostrarExcusa;

console.log("Hello Rigo from the console!");
