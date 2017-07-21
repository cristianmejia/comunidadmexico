class CreateSpaces < ActiveRecord::Migration[5.1]
  def change
    create_table :spaces do |t|
      t.string :title
      t.string :name
      t.text :description
      t.boolean :published
      t.text :content
      t.string :avatar
      t.string :lat
      t.string :long
      t.string :local

      t.timestamps
    end
  end
end
