class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :content
      t.string :author
      t.integer :rating
      t.belongs_to :book

      t.timestamps
    end
  end
end
