"use strict";

const cardsContainer = document.getElementById("resultBooks");

const displayCard = function (post) {
  const cardHtml = `
    <div class="col col-sm mt-3">
      <div class="card shadow">
        <img src="${post.img}" class="card-img-top" alt="Book" />
        <div class="card-body">
          <p class="card-text fw-bold">${post.title}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID # ${post.asin}</li>
          <li class="list-group-item">💲 ${post.price}</li>
          <li class="list-group-item">Category: ${post.category}</li>
        </ul>
        <div class="d-grid card-body rounded-bottom-1">
          <a href="#" id="addToCart" class="btn btn-success bg-gradient card-link mb-1">Add to cart</a>
          <a href="#" class="btn btn-primary bg-gradient card-link ms-0">Buy</a>
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

/* Add to Cart Function */

let listCart = [];
