class CreatePomodoros < ActiveRecord::Migration[6.0]
  def change
    create_table :pomodoros do |t|
      t.integer :length
      t.boolean :completed

      t.timestamps
    end
  end
end
