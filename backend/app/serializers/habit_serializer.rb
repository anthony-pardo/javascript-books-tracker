class HabitSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :frequency, :goal_date
  has_many :pomodoros
end