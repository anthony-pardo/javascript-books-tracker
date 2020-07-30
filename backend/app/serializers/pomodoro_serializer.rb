class PomodoroSerializer
  include FastJsonapi::ObjectSerializer
  attributes :length, :completed
  belongs_to :habit
end