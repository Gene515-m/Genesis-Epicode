// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};

//lista dei prezzi degli oggetti attualmente nel carrello
const prices = [34, 5, 2];

const shippingCost = 50;
let utenteCheEffettuaLAcquisto = amy;

let listaUtenti = [];
let sommaCarello = 0;
let utentiAmbassador = [];
let utentiNonAmbassdor = [];

// somma carrello
for (let i = 0; i < prices.length; i++) {
  sommaCarello += prices[i];
}
console.log(sommaCarello);

listaUtenti.push(marco, paul, amy);
console.log(listaUtenti);
//array di ambassador e non
for (let i = 0; i < listaUtenti.length; i++) {
  let utente = listaUtenti[i];
  if (utente.isAmbassador) {
    utentiAmbassador.push({
      name: utente.name,
      lastName: utente.lastName,
      isAmbassador: utente.isAmbassador,
    });
  } else {
    utentiNonAmbassdor.push({
      name: utente.name,
      lastName: utente.lastName,
      isAmbassador: utente.isAmbassador,
    });
  }
  console.log(utentiAmbassador, utentiNonAmbassdor);
}
//controllo ambassdor
if (utenteCheEffettuaLAcquisto.isAmbassador) {
  sommaCarello = sommaCarello - sommaCarello * 0.3;
} else {
  sommaCarello = sommaCarello;
}
let fraseCarello = "";
//controllo spedizione
console.log(sommaCarello);
if (sommaCarello <= 100) {
  sommaCarello += shippingCost;
  fraseCarello = `${utenteCheEffettuaLAcquisto} deve pagare in totale ${sommaCarello} con spedizione`;
} else {
  fraseCarello = `${utenteCheEffettuaLAcquisto}deve pagare ${sommaCarello} senza sepdizione`;
}
console.log(fraseCarello);
//
for (let i = 0; listaUtenti.length; i++) {
  let frase = `${listaUtenti[i].name} ${listaUtenti[i].lastName} ${
    listaUtenti[i].isAmbassador ? "è" : "non è"
  } "ambassador. `;
  console.log(frase);
}
