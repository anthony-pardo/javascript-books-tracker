class HabitsController < ApplicationController
  def index
    habits = Habit.all
    options = {
      include: [:pomodoros], fields: { pomodoros: [:length, :completed] }
    }
    render json: HabitSerializer.new(habits, options)
  end

  def show
    habit = Habit.find_by(id: params[:id])
    render json: habit
  end

  def create
    habit = Habit.new(habit_params)

    if habit.save
      render json: habit, status: :created, location: habit
    else
      render json: habit.errors, status: :unprocessable_entity
    end
  end

  def destroy
    habit = Habit.find_by(id: params[:id])
    habit.delete
  end

  private
    def habit_params
      params.require(:habit).permit(:title, :goal, :actual)
    end
end
