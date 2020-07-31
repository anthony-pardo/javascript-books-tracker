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

  def create 
    pomodoro = Pomodoro.new(pomodoro_params)

    if pomodoro.save
      render json: pomodoro, status: :created, location: pomodoro
    else
      render json: pomodoro.errors, status: :unprocessable_entity
    end
  end

  private 

  def pomodoro_params
    params.require(:pomodoro).permit(:length, :completed, :habit_id)
  end
end
