class Pomodoro {
  constructor(id, length, completed=false) {
    this.id = id;
    this.length = length;
    this.completed = completed;
  }

  // render habit instance method
  renderPomodoro() {
    const pomodorosDiv = document.getElementById('pomodoros-container');

    pomodorosDiv.innerHTML += 
    `<div class="col-md-4" id="habit-id-${this.id}">
      <div class="card mb-4 shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
          <title>${this.length}</title>
          <rect width="100%" height="100%" fill="#55595c"/>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">${this.length} minutes</text><br>
        </svg>
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary delete-pomodoro-button" onclick="deletePomodoro()" data-id="${this.id}">Delete Pomodoro</button>
              <button type="button" class="btn btn-sm btn-outline-secondary" onclick="viewPomodoro()" data-id="${this.id}">View Pomodoro Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }
}