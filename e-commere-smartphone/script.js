"use strict";
/*===ESERCIZIO7=====Change header h1 with typewriter========*/

function overwriteContentWithAnimation() {
  const delayBeforeAnimation = 2000; // Tempo di attesa prima di avviare l'animazione (in millisecondi)
  const text = " to GMobile store!";
  const color = "white";

  // Aspetta per un po' prima di avviare l'animazione
  setTimeout(function () {
    const element = document.querySelector(".title h1");

    if (element) {
      element.style.color = color;
      element.style.fontSize = "3.4rem";
      element.style.fontWeight = "bold";
      element.style.textShadow = "-5px 5px 6px rgba(0,0,0,0.69);";
      animateText(element, text, 50); // Avvia l'animazione di scrittura
    } else {
      console.error("Element with selector '.title h1' not found.");
    }
  }, delayBeforeAnimation);
}

function animateText(element, text, speed) {
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}

overwriteContentWithAnimation();

/*========//Change header h1\\========*/

/*========Modal========*/

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

/*===ESERCIZIO 8======= Change Background =============*/

function randomBkgdColor() {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  let colore;

  switch (randomNumber) {
    case 1:
      colore =
        "linear-gradient(45deg, rgba(0,212,255,1) 0%, rgba(11,3,45,1) 100%)";
      break;
    case 2:
      colore =
        "linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(0,0,255,1) 100%)";
      break;
    case 3:
      colore =
        "linear-gradient(45deg, rgba(255,255,0,1) 0%, rgba(0,255,0,1) 100%)";
      break;
    case 4:
      colore =
        "linear-gradient(45deg, rgba(255,0,255,1) 0%, rgba(255,255,0,1) 100%)";
      break;
    case 5:
      colore =
        "linear-gradient(45deg, rgba(0,255,255,1) 0%, rgba(255,0,0,1) 100%)";
      break;
    default:
      colore =
        "linear-gradient(45deg, rgba(0,212,255,1) 0%, rgba(11,3,45,1) 100%)";
  }

  document.body.style.background = colore;
}

// Esegui la funzione per cambiare il colore di sfondo ogni 5 secondi (5000 millisecondi)
setInterval(randomBkgdColor, 5000);

/*==========// Change Background \\ =============*/

/*=================Footer ===============================*/

/*=====Nuovo fittizio======*/
function cambiaIndirizzoFooter(nuovoIndirizzo) {
  const footer = document.getElementById("nuovoFittizio");

  if (footer) {
    footer.innerHTML = "Website: " + nuovoIndirizzo;
  } else {
    console.error("Elemento footer non trovato.");
  }
}

// Aggiorno l'indirizzo nel footer
const nuovoIndirizzoFittizio = "www.gmobile-store.com";
cambiaIndirizzoFooter(nuovoIndirizzoFittizio);
/*=====//Nuovo fittizio\\======*/

/*=====Anno attuale e copyright======*/
const currentYear = document.querySelector(".presentYear");

const date = new Date().getFullYear();

currentYear.textContent = date;
/*=====//Anno attuale e copyright\\======*/

function hideShow() {
  const div = document.getElementById("xpose");
  // Verifica se il div è visibile
  if (div.style.display === "none") {
    // Se è nascosto, mostra il div
    div.style.display = "block";
  } else {
    // Se è visibile, nascondi il div
    div.style.display = "none";
  }
}
