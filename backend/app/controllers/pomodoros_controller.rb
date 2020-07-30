class PomodorosController < ApplicationController
  def index 
    if params[:habit_id]
      habit = Habit.find_by(id: params[:habit_id])
      if habit.nil?
        render json: habit.errors, status: :unprocessable_entity
      else
        pomodoros = habit.pomodoros
        render json: PomodoroSerializer.new(pomodoros)
      end
    else 
      pomodoros = Pomodoros.all
      render json: PomodoroSerializer.new(pomodoros)
    end
  end
end
