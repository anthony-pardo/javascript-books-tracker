const BACKEND_URL = 'http://localhost:3000';
const HABITS_URL = `${BACKEND_URL}/habits`;

window.addEventListener('DOMContentLoaded', (event) => {
  fetchHabits();
  let habitsForm = document.getElementById("new-habit-form");
  habitsForm.addEventListener('submit', habitFormSubmission);
  
});


// read 
function fetchHabits() {
  fetch(HABITS_URL)
  .then(response => response.json())
  .then(habits => {
    console.log(habits);
    for (const habit of habits.data) {
      let b = new Habit(habit.id, habit.attributes.title, habit.attributes.goal);
      b.renderHabit();
    }
  });
}

// read individual Habit
function fetchHabitWithPomodoros() {
  const habitsDiv = document.getElementById('habits-container');
  habitsDiv.innerHTML = "";
  const pomodorosDiv = document.getElementById('pomodoros-container');
  pomodorosDiv.innerHTML = "";
  

  const habitId = event.target.dataset.id;
  fetch(`${HABITS_URL}/${habitId}`)
  .then(response => response.json())
  .then(habit => {
    console.log(habit);
    let b = new Habit(habit.data.id, habit.data.attributes.title, habit.data.attributes.goal);
    b.renderHabit();
    const pomodorosHeader = document.getElementById('pomodoros-header');
    pomodorosHeader.innerHTML = `Pomodoros for ${habit.data.attributes.title}:`;
  });

  fetch(`${HABITS_URL}/${habitId}/pomodoros`)
  .then(response => response.json())
  .then(pomodoros => {
    console.log(pomodoros);
    for (const pomodoro of pomodoros.data) {
      let r = new Pomodoro(pomodoro.id, pomodoro.attributes.length, false);
      r.renderPomodoro();
    }
  });
}

// create 
function habitFormSubmission() {
  event.preventDefault();
  let title = document.getElementById('title').value;
  let goal = document.getElementById('goal').value;
  let habit = {
    title: title,
    goal: goal
  }

  fetch(HABITS_URL, {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(habit)
    })
    .then(resp => resp.json())
    .then(habit => {
        let b  = new Habit(habit.id, habit.title, habit.goal)
        b.renderHabit();
    });
}


// delete
function deleteHabit() {
  const habitId = event.target.dataset.id;
  console.log(habitId);
  fetch(`${BACKEND_URL}/habits/${habitId}`, {
    method: 'DELETE'
  }); 
  
  this.location.reload();
}