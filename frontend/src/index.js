const BACKEND_URL = 'http://localhost:3000';
const HABITS_URL = `${BACKEND_URL}/habits`;
const POMODOROS_URL = `${BACKEND_URL}/pomodoros`;

window.addEventListener('DOMContentLoaded', (event) => {
  fetchHabits();
  let habitsForm = document.getElementById("new-habit-form");
  let pomodoroForm = document.getElementById("new-pomodoro-form");
  habitsForm.addEventListener('submit', habitFormSubmission);
  pomodoroForm.addEventListener('submit', pomodoroFormSubmission);
});


// read 
function fetchHabits() {
  fetch(HABITS_URL)
  .then(response => response.json())
  .then(habits => {
    console.log(habits);
    for (const habit of habits.data) {
      let b = new Habit(habit.id, habit.attributes.title, habit.attributes.goal, habit.relationships.pomodoros.data.length);
      b.renderHabit();
    }
  });
}

// read individual habit with its pomodoros
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
    let b = new Habit(habit.data.id, habit.data.attributes.title, habit.data.attributes.goal, habit.included.length);
    b.renderHabit();
    const pomodorosHeader = document.getElementById('pomodoros-header');
    pomodorosHeader.innerHTML = `Pomodoros for ${habit.title}:`;
  });

  fetch(`${HABITS_URL}/${habitId}/pomodoros`)
  .then(response => response.json())
  .then(pomodoros => {
    console.log(pomodoros);
    for (const pomodoro of pomodoros.data) {
      let p = new Pomodoro(pomodoro.id, pomodoro.attributes.length, false);
      p.renderPomodoro();
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
        let h  = new Habit(habit.id, habit.title, habit.goal)
        h.renderHabit();
    });
}

// create pomodoro for habit
function pomodoroFormSubmission() {
  event.preventDefault();
  let habitId = parseInt(document.getElementById('habitId').value);
  let length = document.getElementById('length').value;
  let completed = document.getElementById('completed').value;
  if (completed = "on") {
    completed = true;
  } else {
    completed = false;
  }
  let pomodoro = {
    length: length,
    completed: completed,
    habit_id: habitId
  }

  fetch(POMODOROS_URL, {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(pomodoro)
    })
    .then(resp => resp.json())
    .then(pomodoro => {
        let p  = new Pomodoro(pomodoro.id, pomodoro.length, pomodoro.completed);
        p.renderPomodoro();
    });
}

// change new-pomodoro-form to have the selected habit and put focus on the form
function addPomodoro() {
  console.log('here');
  const habitId = event.target.dataset.id;
  const pomodoroForm = document.getElementById('new-p-form');
  pomodoroForm.className = "";
  document.getElementById('length').focus();
  document.getElementById('habitId').value = habitId;
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