// variabili

// inizializzazione variabili
let firstName = prompt("Inserisci il tuo nome","Mattia");
console.log("nome untente:", firstName);

let lastName = prompt("Inserisci il tuo cognome","Giunta");
console.log("cognome untente:",lastName);

let ageUser = prompt("Inserisci la tua età",);
console.log("età untente:",ageUser);

let kilometers = prompt("Inserisci i km da percorrere");
console.log("km da percorrere:", kilometers);

// prezzo al km
let kmPrice = 0.21;

// prezzo al km calcolato con i km che mette l'utente
let priceWithoutDiscount = (kilometers * kmPrice);
console.log("prezzo senza sconto:", priceWithoutDiscount);

// variabile per sconto del 20%
let disconunt20 = 20 / 100;

// variabile per sconto del 40%
let disconunt40 = 40 / 100;

let totalPrice;


// applicazione dello sconto in base all'età (under 18 -20%) (over 65 -40%)

if (ageUser < 18) {

    totalPrice = (priceWithoutDiscount - (disconunt20 * priceWithoutDiscount))

} else if (ageUser > 65) {

    totalPrice = (priceWithoutDiscount - (disconunt40 * priceWithoutDiscount))


} else {

    totalPrice = priceWithoutDiscount

}

console.log("il prezzo totale:", totalPrice);

document.getElementById('tiketPrice').innerHTML = "<p> Il prezzo del tuo biglietto e di:"+ " " + totalPrice.toFixed(2) + " €" + "</p>";

// Terminato esercizio





