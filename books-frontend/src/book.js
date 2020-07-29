class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  // render book instance method
  renderBook() {
    const booksDiv = document.getElementById('books-container');

    booksDiv.innerHTML += 
    `<div class="col-md-4" id="book-id-${this.id}">
      <div class="card mb-4 shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
          <title>${this.title}</title>
          <rect width="100%" height="100%" fill="#55595c"/>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">${this.title}</text><br>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">by ${this.author}</text>
        </svg>
        <div class="card-body">
          <p class="card-text">Title Summary.</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary delete-book-button" onclick="deleteBook()" data-id="${this.id}">Delete Book</button>
              <button type="button" class="btn btn-sm btn-outline-secondary" onclick="viewBook()" data-id="${this.id}">View Book Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }
}

