// main.js
// JS for index.html (home page)

import { quotes } from "./quotes.js";

// ----- Utility: footer year -----
function setCurrentYear() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// ----- Quote display logic -----
function getRandomQuote(excludeId = null) {
  if (quotes.length === 0) return null;

  // If there's only one quote, just return it.
  if (quotes.length === 1) return quotes[0];

  let randomQuote;
  do {
    const index = Math.floor(Math.random() * quotes.length);
    randomQuote = quotes[index];
  } while (excludeId !== null && randomQuote.id === excludeId);

  return randomQuote;
}

function displayQuote(quote) {
  if (!quote) return;

  const textEl = document.getElementById("quote-text");
  const refEl = document.getElementById("quote-reference");
  const authorNameEl = document.getElementById("quote-author-name");
  const authorImgEl = document.querySelector(".quote-author-image");
  const authorRoleEl = document.querySelector(".quote-author-role");

  if (textEl) textEl.textContent = `“${quote.text}”`;
  if (refEl) refEl.textContent = quote.reference;
  if (authorNameEl) authorNameEl.textContent = quote.author;

  if (authorImgEl) {
    authorImgEl.src = quote.image;
    // Conditional alt text depending on whether this is scripture or a person
    if (quote.sourceType === "scripture") {
      authorImgEl.alt = "Open scriptures";
    } else {
      authorImgEl.alt = `Portrait of ${quote.author}`;
    }
  }

  if (authorRoleEl) {
    // Simple conditional branching to show role text
    if (quote.sourceType === "scripture") {
      authorRoleEl.textContent = "Scripture";
    } else {
      authorRoleEl.textContent = "Prophetic teaching";
    }
  }
}

function setupNewQuoteButton(initialQuote) {
  const button = document.getElementById("new-quote-btn");
  if (!button) return;

  let currentQuoteId = initialQuote ? initialQuote.id : null;

  button.addEventListener("click", () => {
    const nextQuote = getRandomQuote(currentQuoteId);
    if (nextQuote) {
      displayQuote(nextQuote);
      currentQuoteId = nextQuote.id;
    }
  });
}

// Page init.
function initHomePage() {
  setCurrentYear();

  const firstQuote = getRandomQuote();
  if (firstQuote) {
    displayQuote(firstQuote);
    setupNewQuoteButton(firstQuote);
  }
}

// Run when module is loaded
initHomePage();
