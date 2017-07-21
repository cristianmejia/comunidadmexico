class AddPublishedToMedia < ActiveRecord::Migration[5.1]
  def change
    add_column :media, :published, :boolean
  end
end
