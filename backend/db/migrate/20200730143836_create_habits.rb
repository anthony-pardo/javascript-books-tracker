class CreateHabits < ActiveRecord::Migration[6.0]
  def change
    create_table :habits do |t|
      t.string :title
      t.integer :goal
      t.integer :actual

      t.timestamps
    end
  end
end
