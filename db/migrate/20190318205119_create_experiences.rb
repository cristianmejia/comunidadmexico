class CreateExperiences < ActiveRecord::Migration[5.1]
  def change
    create_table :experiences do |t|
      t.string :title
      t.string :name
      t.references :space, foreign_key: true
      t.text :description
      t.text :content
      t.time :duration
      t.timestamp :expiration
      t.string :gps
      t.string :author

      t.timestamps
    end
  end
end
