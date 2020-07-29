class Review {
  constructor(id, author, content, rating) {
    this.id = id;
    this.author = author;
    this.content = content;
    this.rating = rating;
  }

  // render book instance method
  renderReview() {
    const reviewsDiv = document.getElementById('reviews-container');

    reviewsDiv.innerHTML += 
    `<div class="col-md-4" id="book-id-${this.id}">
      <div class="card mb-4 shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
          <title>${this.author}</title>
          <rect width="100%" height="100%" fill="#55595c"/>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">${this.rating}</text><br>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">by ${this.author}</text>
        </svg>
        <div class="card-body">
          <p class="card-text">${this.content}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary delete-review-button" onclick="deleteReview()" data-id="${this.id}">Delete Review</button>
              <button type="button" class="btn btn-sm btn-outline-secondary" onclick="viewReview()" data-id="${this.id}">View Review Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }
}