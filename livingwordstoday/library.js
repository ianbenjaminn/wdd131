// library.js
// JS for library.html (quote list + filters)

import { quotes } from "./quotes.js";

// ----- Utility: footer year -----
function setCurrentYear() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// ----- Filter helpers -----
function filterByTopic(quotesArray, topicValue) {
  if (topicValue === "all") return quotesArray;
  return quotesArray.filter((quote) => quote.topic === topicValue);
}

function filterByAuthor(quotesArray, authorValue) {
  if (authorValue === "all") return quotesArray;
  return quotesArray.filter((quote) => quote.authorKey === authorValue);
}

function applyFilters() {
  const topicSelect = document.getElementById("topic-filter");
  const authorSelect = document.getElementById("author-filter");

  const topicValue = topicSelect ? topicSelect.value : "all";
  const authorValue = authorSelect ? authorSelect.value : "all";

  let filtered = quotes.slice(); // copy array

  filtered = filterByTopic(filtered, topicValue);
  filtered = filterByAuthor(filtered, authorValue);

  renderQuotes(filtered);
}

// ----- DOM rendering -----
function createQuoteCard(quote) {
  const article = document.createElement("article");
  article.classList.add("quote-card");

  const textDiv = document.createElement("div");
  textDiv.classList.add("quote-text");
  textDiv.textContent = `“${quote.text}”`;

  const refP = document.createElement("p");
  refP.classList.add("quote-reference");
  refP.textContent = quote.reference;

  const metaDiv = document.createElement("div");
  metaDiv.classList.add("quote-meta");

  const topicSpan = document.createElement("span");
  topicSpan.classList.add("quote-tag");
  topicSpan.textContent = `Topic: ${capitalize(quote.topic)}`;

  const sourceSpan = document.createElement("span");
  sourceSpan.classList.add("quote-tag");
  if (quote.sourceType === "scripture") {
    sourceSpan.textContent = "Source: Scripture";
  } else {
    sourceSpan.textContent = `Author: ${quote.author}`;
  }

  metaDiv.append(topicSpan, sourceSpan);
  article.append(textDiv, refP, metaDiv);

  return article;
}

function renderQuotes(quotesToRender) {
  const container = document.getElementById("quotes-container");
  const noResults = document.getElementById("no-results-message");
  if (!container) return;

  // Clear current content
  container.innerHTML = "";

  if (!quotesToRender || quotesToRender.length === 0) {
    if (noResults) {
      noResults.hidden = false;
    }
    return;
  }

  if (noResults) {
    noResults.hidden = true;
  }

  quotesToRender.forEach((quote) => {
    const card = createQuoteCard(quote);
    container.appendChild(card);
  });
}

function capitalize(value) {
  if (!value) return "";
  return value.charAt(0).toUpperCase() + value.slice(1);
}

// ----- Event wiring -----
function setupFilterEvents() {
  const topicSelect = document.getElementById("topic-filter");
  const authorSelect = document.getElementById("author-filter");
  const clearBtn = document.getElementById("clear-filters-btn");

  if (topicSelect) {
    topicSelect.addEventListener("change", applyFilters);
  }
  if (authorSelect) {
    authorSelect.addEventListener("change", applyFilters);
  }
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (topicSelect) topicSelect.value = "all";
      if (authorSelect) authorSelect.value = "all";
      renderQuotes(quotes);
    });
  }
}

// Page init.
function initLibraryPage() {
  setCurrentYear();
  renderQuotes(quotes);
  setupFilterEvents();
}

initLibraryPage();
