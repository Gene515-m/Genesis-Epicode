'use strict';

/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Definizione della funzione crazySum
function crazySum(numb1, numb2) {
  // Verifica se i due numeri sono uguali
  if (numb1 === numb2) {
    // Se i numeri sono uguali, calcola la somma e il prodotto dei due numeri, quindi moltiplica il risultato per 3
    let sumXprdct = (numb1 + numb2) * 3;
    return sumXprdct; // Restituisce il risultato
  } else {
    // Se i numeri non sono uguali, calcola semplicemente la somma dei due numeri
    let sum = numb1 + numb2;
    return sum; // Restituisce il risultato
  }
}

// Richiesta all'utente di inserire due numeri tramite prompt e conversione in intero
// let numb1 = parseInt(prompt("Scrivi il primo numero:"));
// let numb2 = parseInt(prompt("Scrivi il secondo numero:"));

// Chiamata alla funzione crazySum con i numeri inseriti dall'utente e stampa 
// console.log(crazySum(numb1, numb2));


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Definizione funzione boundary
function boundary(numb) {
  // Verifica se il valore passato non è un numero
  if (isNaN(numb)) {
       console.log("Numero non valido")
   } // Verifica se il numero è compreso tra 20 e 100 inclusi oppure se è uguale a 400
 if ((numb >= 20 && numb <= 100) || numb === 400) {
   return true;
 } else {
   return false;
 }
}
// let numb = parseInt(prompt("Scrivi un numero"));     //Richiesta di mettere un numero tramite prompt(<-dà il numero in stringa), parseint trasforma la stringa in numero
// console.log(boundary(numb));   //Stampa risultato

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Definizione funzione reverseString
function reverseString(str) {
  // Inizializzazione di una stringa vuota per memorizzare la stringa invertita
  let wordInvert = "";
  
  // Ciclo for per iterare attraverso la stringa al contrario
  for (let i = str.length - 1; i >= 0; i--) {
    // Concatenazione dei caratteri invertiti alla stringa wordInvert
    wordInvert = wordInvert + str[i];
  }
  
  // Restituisce la stringa invertita
  return wordInvert;
}

// Richiesta all'utente di inserire qualsiasi cosa tramite prompt e conversione in maiuscolo
// let stringa = prompt("Scrivi qualsiasi cosa e lo inverto per te:").toUpperCase();

// Stampa
// console.log(reverseString(stringa));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Definizione funzione upperFirst
function upperFirst(str) {
  // Split della stringa in un array di parole separandole per spazi
  str = str.split(" ");
  
  // Stringa vuota per memorizzare il risultato
  let result = " ";
  
  // Ciclo for per iterare attraverso ogni parola dell'array
  for (let i = 0; i < str.length; i++) {
    // Concatenazione della prima lettera della parola in maiuscolo e delle restanti lettere in minuscolo
    result += str[i].substring(0, 1).toUpperCase() + str[i].substring(1).toLowerCase();
  }
  
  // Trasformazione della prima lettera di ogni parola in maiuscolo
  return result;
}

// Richiesta all'utente di inserire una parola tramite prompt
let word = prompt("Scrivi una parola:");

// Stampa
console.log(upperFirst(word));


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Definizione funzione giveMeRandom
function giveMeRandom(numb) {
  // Inizializzazione di un array vuoto per memorizzare i numeri
  let arrayNumb = [];

  // Verifica se il numero è compreso tra 0 e 10 inclusi
  if (numb >= 0 && numb <= 10) {
    // Ciclo for per aggiungere i numeri da 0 fino al numero incluso all'array
    for (let i = 0; i <= numb; i++) {
      arrayNumb.push(i); // Aggiunge il numero corrente all'array
    }
    return arrayNumb; // Restituisce l'array con i numeri da 0 fino al numero incluso
  } else {
    return "Numero non valido"; // Messaggio di errore se il numero non è compreso tra 0 e 10 inclusi
  }
}

// Richiesta all'utente di inserire un numero tramite prompt 
// let numb3 = parseInt(prompt("Scegli un numero da 0 a 10:"));

//Stampa 
// console.log(giveMeRandom(numb3));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  let calc = l1 * l2;
  return calc;
}
// let l1 = parseInt(prompt("Metti valore base"));
// let l2 = parseInt(prompt("Metti valore altezza"));
// let areaRettangolo = area(lato1, lato2);
// console.log(`L' area del rettangolo è : ${areaRettangolo}`);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//let num5 = parseInt(prompt("dimmi un numero:"));
//let num6 = parseInt(prompt("dimmi secondo numero"));
let result = 0;
function crazyDiff(numb5, numb6) {
  if (
    num5 - num6 === 19 ||
    num6 - num5 === 19 ||
    num5 - numb6 === -19 ||
    numb6 - numb5 === -19
  ) {
    return (result = num5 - num6);
  } else if (num5 - num6 > 19) {
    return (result = (num5 - num6) * 3);
  } else {
    return (result = num5 - num6);
  }
}
//console.log(crazyDiff(num5, num6));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function codify(str) {
  if (str === "code") {
    return str;
  } else {
    return `code ${str}`;
  }
}
//let code = prompt("quale e il codice:").toLowerCase();
//console.log(codify(code));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

//let num4 = parseInt(prompt("il numero da controllare:"));
function cheeck3and7(numb) {
  if (num4 >=0 && num4 % 3 === 0 || num4 % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
//console.log(cheeck3and7());
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let word = prompt("Scrivi una parola e taglio la prima e l'ultima lettea");
function cutString(str) {
  let cutWord = str.slice(1, -1);
  return cutWord;
}
console.log(cutString(word));