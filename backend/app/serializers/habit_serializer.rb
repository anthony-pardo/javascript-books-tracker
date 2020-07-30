class HabitSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :goal, :pomodoros
  has_many :pomodoros
end