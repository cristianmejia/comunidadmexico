class AddSpaceToNotice < ActiveRecord::Migration[5.1]
  def change
    add_reference :notices, :space, foreign_key: true
  end
end
