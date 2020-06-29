//Palidroma


//Chiedere all’utente di inserire una parola

var parolaInserita = prompt("inserisci una parola");

var parolaArray = parolaInserita.split("");

console.log(parolaArray);

var contrario = parolaArray.reverse("");
console.log(contrario);


//Creare una funzione per capire se la parola inserita è palindroma
if (contrario === parolaArray){
  console.log("vero");

}else {
  console.log("falso");
}
