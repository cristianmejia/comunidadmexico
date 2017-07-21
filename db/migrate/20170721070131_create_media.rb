class CreateMedia < ActiveRecord::Migration[5.1]
  def change
    create_table :media do |t|
      t.string :title
      t.string :name
      t.text :description
      t.string :author
      t.string :url
      t.references :space, foreign_key: true

      t.timestamps
    end
  end
end
