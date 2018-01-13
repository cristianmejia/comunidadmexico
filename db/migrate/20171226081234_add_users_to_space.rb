class AddUsersToSpace < ActiveRecord::Migration[5.1]
  def change
    add_reference :spaces, :space, foreign_key: true
  end
end
