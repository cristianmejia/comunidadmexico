class AddImpressionsCountToSpaces < ActiveRecord::Migration[5.1]
  def change
    add_column :spaces, :impressions_count, :integer, default: 0
  end
end
