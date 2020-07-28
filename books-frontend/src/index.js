const BACKEND_URL = 'http://localhost:3000';
const BOOKS_URL = 'http://localhost:3000/books';

window.addEventListener('DOMContentLoaded', (event) => {
  fetch(BOOKS_URL)
  .then(response => response.json())
  .then(data => console.log(data));

  
  
});