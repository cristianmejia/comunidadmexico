class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :provider, foreign_key: true
      t.string :consumer, foreign_key: true
      t.references :experience, foreign_key: true
      t.timestamp :started
      t.timestamp :finished
      t.integer :status

      t.timestamps
    end
  end
end
