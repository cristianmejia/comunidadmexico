class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :name
      t.text :description
      t.boolean :published
      t.text :content
      t.string :photo
      t.references :space, foreign_key: true

      t.timestamps
    end
  end
end
