/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//NUMERO-sono numeri interi e decimali
//STRINGA-sono delle parole racchiuse tra apici doppi o singoli ""  ''  
/*BOOLEAN-è un tipo logico che può assumere solo uno dei valori logici vero o falso e usiamo i valori booleani per prendere decisioni con i codici */
//UNDEFINED-è una scatola vuota che puoi utilizzare in seguito per mettere degli oggetti di qualsiasi tipo
//NULL-significa vuoto come una scatola vuota e chiusa
//SIMBOLI-definisce semplicemente un valore che è unico e non può essere modificato
//BigInt-è per numeri interi troppo grandi per essere rappresentati

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*Nei oggetti diciamo semplicemente cosa rappresenta ogni pezzo di informazione, assegnando una parola chiave a ogni valore.
*Praticamente gli oggetti ci aiutano a mettere insieme e ordinare le informazioni in un modo che ha senso, e ci permettono di creare facilmente strutture di dati complicate * */
//Gli oggetti vengono racchiusi con le parentesi graffe e servono per definire un nuovo oggetto
const genesis = {
    firstName: 'Genesis',
    lastName: 'Miranda',
    job: 'Aspiring Developer',
    likeCoding: true,
    friends: ['Aaaa', 'Bbbb', 'Cccc']
};
console.table(genesis)
/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(12+20);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Genesis";
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(x-4);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";

console.log(name1 === name2);
console.log(name1.toLowerCase()=== name2.toLowerCase());

