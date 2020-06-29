//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.


var scelta = prompt("scegli pari o dispari?");
console.log("scelta");

var numeroGiocatore = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log(numeroGiocatore);

var numeroBot = parseInt(Math.floor(Math.random()*5)+1);
console.log(numeroBot);

var risultato = numeroGiocatore + numeroBot;

console.log(risultato);


if (scelta %2 == 0) {
  var pari;


}else {
  var dispari;


}

if (risultato == scelta) {
  console.log("hai vinto");
}else {
  console.log("hai perso");



}
