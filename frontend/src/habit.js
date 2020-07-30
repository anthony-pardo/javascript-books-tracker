class Habit {
  constructor(id, title, goal, actual=0) {
    this.id = id;
    this.title = title;
    this.goal = goal;
    this.actual = actual;
  }

  // render habit instance method
  renderHabit() {
    const habitsDiv = document.getElementById('habits-container');

    habitsDiv.innerHTML += 
    `<div class="col-md-4" id="habit-id-${this.id}">
      <div class="card mb-4 shadow-sm">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
          <title>${this.title}</title>
          <rect width="100%" height="100%" fill="#55595c"/>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">${this.title}</text><br>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">goal: ${this.goal}</text>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">actual: ${this.actual}</text>
        </svg>
        <div class="card-body">
          <p class="card-text">Title Summary.</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary delete-habit-button" onclick="deleteHabit()" data-id="${this.id}">Delete Habit</button>
              <button type="button" class="btn btn-sm btn-outline-secondary" onclick="fetchHabitWithPomodoros()" data-id="${this.id}">View Habit Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }
}

