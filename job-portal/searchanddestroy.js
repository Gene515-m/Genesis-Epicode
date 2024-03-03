"use strict";

const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  { title: "Lead Guest Service Specialist", location: "US, CA, San Francisco" },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  { title: "Applications Developer, Digital", location: "US, CT, Stamford" },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  { title: "VP of Sales - Vault Dragon", location: "SG, 01, Singapore" },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  { title: "Talent Management Process Manager", location: "US, MO, St. Louis" },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  { title: "English Teacher Abroad", location: "US, NY, Saint Bonaventure" },
];

function searchAndReset() {
  searchJobs(); // Esegue la fuzione di ricerca
  resetInputs(); // Resetta gli input compilati
}

function resetInputs() {
  document.getElementById("searchTitle").value = ""; // Resetta l'input del titolo
  document.getElementById("searchLocation").value = ""; // Resetta l'input della posizione
  document.getElementById("results").innerHTML = ""; // Pulisce i risultati
  document.getElementById("results").style.display = "none"; // Nasconde il div dei risultati
}

function searchJobs(event) {
  const titleTerm = document.getElementById("searchTitle").value.toLowerCase();
  const locationTerm = document
    .getElementById("searchLocation")
    .value.toLowerCase();
  const resultsContainer = document.getElementById("results");
  // resultsContainer;
  let searchResults = [];

  // Pulisce i risultati precedenti
  resultsContainer.innerHTML = "";
  //Previene l'esecuzione se l'utente non compila e compare un alert
  if (titleTerm === "" || locationTerm === "") {
    alert("Please fill up the box");
    event.preventDefault();
  }

  // Ciclo per cercare nell'array jobs
  for (let i = 0; i < jobs.length; i++) {
    // console.log(jobs[i]);
    const jobTitle = jobs[i].title.toLowerCase();
    const jobLocation = jobs[i].location.toLowerCase();
    if (jobTitle.includes(titleTerm) && jobLocation.includes(locationTerm)) {
      searchResults.push(jobs[i]);
    }
  }

  // Visualizza i risultati
  if (searchResults.length > 0) {
    const resultList = document.createElement("ul"); // Crea un elemento <ul>
    resultList.classList.add("search-results"); // Aggiungi classe CSS alla lista
    searchResults.forEach((result) => {
      const resultItem = document.createElement("li"); // Crea un elemento <li> per ogni risultato
      resultList.appendChild(resultItem); // Aggiunge il risultato alla lista
      resultItem.textContent = `Title: ${result.title}  | Location: ${result.location}`;
    });
    resultsContainer.appendChild(resultList); // Aggiunge la lista al contenitore dei risultati
    // resultsContainer.style.display = "block"; // Mostra il div dei risultati
  } else {
    const noResultsElement = document.createElement("p");
    noResultsElement.textContent = "Sorry result not found.";
    noResultsElement.style.fontWeight = "bold";
    resultsContainer.appendChild(noResultsElement);
    resultsContainer.style.display = "none"; // Nasconde il div dei risultati
  }
}
