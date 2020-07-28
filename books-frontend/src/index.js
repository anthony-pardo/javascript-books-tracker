const BACKEND_URL = 'http://localhost:3000';
const BOOKS_URL = `${BACKEND_URL}/books`;

window.addEventListener('DOMContentLoaded', (event) => {
  fetchBooks();
  let booksForm = document.getElementById("new-book-form");
  booksForm.addEventListener('submit', bookFormSubmission);
  
});


// read 
function fetchBooks() {
  fetch(BOOKS_URL)
  .then(response => response.json())
  .then(books => {
    console.log(books);
    for (const book of books.data) {
      let b = new Book(book.id, book.attributes.title, book.attributes.author);
      b.renderBook();
    }
  });
}

// create 
function bookFormSubmission() {
  event.preventDefault();
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let book = {
    title: title,
    author: author
  }

  fetch(BOOKS_URL, {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(book)
    })
    .then(resp => resp.json())
    .then(book => {
        let b  = new Book(book.id, book.title, book.author)
        b.renderBook();
    });
}


// delete
function deleteBook() {
  const bookId = event.target.dataset.id;
  console.log(bookId);
  fetch(`${BACKEND_URL}/books/${bookId}`, {
    method: 'DELETE'
  }); 
  
  this.location.reload();
}