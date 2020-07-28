const BACKEND_URL = 'http://localhost:3000';
const BOOKS_URL = `${BACKEND_URL}/books`;

window.addEventListener('DOMContentLoaded', (event) => {
  fetchBooks();

  
  
});


// read 
function fetchBooks() {
  fetch(BOOKS_URL)
  .then(response => response.json())
  .then(books => {
    console.log(books);
    for (const book of books.data) {
      let b = new Book(book.attributes.id, book.attributes.title, book.attributes.author);
      b.renderBook();
    }
  });
}
// create 
// delete