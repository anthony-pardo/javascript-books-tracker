# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

habit1 = Habit.create(title: "code", goal: 5)
habit2 = Habit.create(title: "journal", goal: 1)

Pomodoro.create(length: 25, completed: 1, habit_id: habit1.id)
Pomodoro.create(length: 25, completed: 1, habit_id: habit1.id)
Pomodoro.create(length: 25, completed: 1, habit_id: habit1.id)
Pomodoro.create(length: 25, completed: 1, habit_id: habit1.id)
Pomodoro.create(length: 50, completed: 1, habit_id: habit1.id)
Pomodoro.create(length: 50, completed: 1, habit_id: habit1.id)

Pomodoro.create(length: 25, completed: 1, habit_id: habit2.id)
Pomodoro.create(length: 25, completed: 1, habit_id: habit2.id)
Pomodoro.create(length: 25, completed: 0, habit_id: habit2.id)
