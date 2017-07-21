class AddPublishedToPolls < ActiveRecord::Migration[5.1]
  def change
    add_column :polls, :published, :boolean
  end
end
