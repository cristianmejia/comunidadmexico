class CreateEvent < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :provider
      t.string :consumer
      t.references :experience, foreign_key: true
      t.timestamp :started
      t.timestamp :finished
      t.integer :status

      t.timestamps
    end
  end
end
