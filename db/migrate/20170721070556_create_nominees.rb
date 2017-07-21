class CreateNominees < ActiveRecord::Migration[5.1]
  def change
    create_table :nominees do |t|
      t.string :title
      t.string :avatar
      t.references :poll, foreign_key: true
      t.boolean :published
      t.text :description
      t.integer :popular_vote

      t.timestamps
    end
  end
end
