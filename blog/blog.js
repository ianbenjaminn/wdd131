const articles = [
  {
    id: 1,
    title: 'Septimus Heap Book One: Magyk',
    date: 'July 5, 2022',
    description:
      'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
    imgAlt: 'Book cover for Septimus Heap 1',
    ages: '10–14',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐'
  },
  {
    id: 2,
    title: 'Magnus Chase Book One: Sword of Summer',
    date: 'December 12, 2021',
    description:
      'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick tries his hand with Norse Mythology—solid result.',
    imgSrc: 'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
    imgAlt: 'Book cover for Magnus Chase 1',
    ages: '12–16',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐'
  },
  {
    id: 3,
    title: 'Belgariad Book One: Pawn of Prophecy',
    date: 'Feb 12, 2022',
    description:
      "A stolen Orb, divided kingdoms, and a farm boy named Garion pulled into a world-sized quest with 'Aunt Pol' and the mysterious Wolf.",
    imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg',
    imgAlt: 'Book cover for Pawn of Prophecy',
    ages: '12–16',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐⭐'
  }
];

// Target container
let reviewList = document.querySelector('#main');

// Render each article (simple loop + template string)
articles.forEach(book => {

	const rating = (book.stars.match(/⭐/g) || []).length;

  let html = `
  <article class="review">
    <aside class="meta" aria-label="Book details">
      <p><time>${book.date}</time></p>
      <p>${book.ages}</p>
      <p>${book.genre}</p>
      <p class="rating" aria-label="Rating: ${rating} out of 5 stars">
        <span aria-hidden="true">
          ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}
        </span>
      </p>
    </aside>

    <section class="content">
      <h2><a href="#">${book.title}</a></h2>
      <figure class="cover">
        <img src="${book.imgSrc}" alt="${book.imgAlt}">
      </figure>
      <p>${book.description}</p>
    </section>

    <footer class="byline">
      <p>Jane Doe</p>
    </footer>
  </article>`;

  reviewList.innerHTML += html;
});
