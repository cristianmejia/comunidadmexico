class CreateEvent < ActiveRecord::Migration[5.1]
  def change
    create_table :experiences do |t|
      t.string :provider
      t.string :consumer
      t.references :space, foreign_key: true
      t.timestamp :started
      t.timestamp :finished
      t.integer :status

      t.timestamps
    end
  end
end
