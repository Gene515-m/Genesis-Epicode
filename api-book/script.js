"use strict";

const cardsContainer = document.getElementById("resultBooks");
const emptyCartDisplay = ""; //"Your cart is empty"
const cartElement = ""; //elemento del carrello (modal)
const cartListCounter = ""; // contatore del numero di elementi nel carrello(icona carrello/badge)

//Obbiettivi Progettazione
//❗❗❗**METTERE BENE LA FUNZIONALITA' DEL CARRELLO❗❗❗ */
//Funzionalità ricerca

//*NB Rivedere BENE struttura Card e Carrello per diminuire gli errori! */

const displayCard = function (post) {
  const cardHtml = `
    <div class="col col-sm mt-3">
      <div class="card shadow">
        <img src="${post.img}" class="img-fluid" alt="Book" />
        <div class="card-body">
          <p class="card-text fw-bold">${post.title}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID # ${post.asin}</li>
          <li class="list-group-item">$${post.price}</li>
          <li class="list-group-item">Category: ${post.category}</li>
        </ul>
        <div class="d-grid card-body rounded-bottom-1">
          <button id="addToCart" class="btn btn-success bg-gradient card-link mb-1">Add to cart</button>
          <button class="btn btn-primary bg-gradient card-link ms-0">Buy</button>
        </div>
      </div>
    </div>
  `;

  cardsContainer.insertAdjacentHTML("beforeend", cardHtml);
};

const getBookData = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok🍌");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((post) => {
        displayCard(post);
      });
    })
    .catch((error) => {
      console.error("❌Problem with the fetch operation:", error);
    });
};

getBookData();
/* TASK
1.Aggiungere funzionalità (add to cart)
2.Aggiungere conteggio elementi (icona carrello)
3.Aggiungere badge sui libri quando viene aggiunto


4.TASK extra
*/
