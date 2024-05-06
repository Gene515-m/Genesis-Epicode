"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartListCounter = document.querySelector(".badge");
  const cartElement = document.querySelector("tbody");

  let cartItemList = document.getElementById("listItemCart");
  // let totalElements = document.getElementById("totalPrice");

  const emptyListItem = document.getElementById("emptyListItem");
  const emptyAll = document.getElementById("emptyAll");

  const emptyCartDisplay = document.getElementById("displayEmptyCart");
  const addToCartAlert = document.getElementById("alertAdd");

  const cardsContainer = document.getElementById("resultBooks");

  //Struttura e inserimento card
  const displayCard = (post) => {
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
            <button id="toastBtn" class="addToCart btn btn-success bg-gradient card-link mb-1">Add to cart</button>
            <button class="btn btn-primary bg-gradient card-link ms-0">Buy</button>
          </div>
        </div>
      </div>
    `;

    cardsContainer.insertAdjacentHTML("beforeend", cardHtml);
  };

  const getBookData = () => {
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

  //Da modificare (+ struttura in html)
  const updateCartCounter = () => {
    cartListCounter.textContent = cartItems.length;
    cartItems.length === 0
      ? emptyCartDisplay.classList.remove("d-none")
      : emptyCartDisplay.classList.add("d-none");
  };

  const addItemToCart = (name, price) => {
    cartItems.push({ name, price });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCartCounter();
    addToCartAlert.classList.remove("d-none");
    renderCart(); 
    updateTotal();
  };

  //Lista elementi per il carrello (MODAL)
  const renderCart = () => {
    cartElement.innerHTML = "";
    cartItems.forEach((item, index) => {
      cartItemList = `<tr>
        <td>${index + 1}</td>
        <td>$${item.price}</td>
        <td>${item.name}</td>
        <td>
          <div class="form-group row">
            <div class="col-md-8">
              <input type="number" class="item-count form-control pe-1" data-name="${
                item.name
              }" value="1">
            </div>
          </div>
        </td>
        <td>
          <button id="emptyListItem" class="delete-item btn btn-danger" data-name="${
            item.name
          }">X</button>
        </td>
      </tr>`;
      cartElement.insertAdjacentHTML("beforeend", cartItemList);
    });
  };

  // pulsante aggiungi carrello
  cardsContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("addToCart")) {
      const card = event.target.closest(".card");
      const title = card.querySelector(".card-text").textContent;
      const price = parseFloat(
        card.querySelector(".list-group-item:nth-child(2)").textContent.slice(1)
      );
      addItemToCart(title, price); // passare titolo/prezzo addItemToCart
    }
  });

  updateCartCounter();
  renderCart();
});

//******Da CREARE FUNZIONE  ELIMINA per ogni elemento/tutti gli elementi nel carrello*******
