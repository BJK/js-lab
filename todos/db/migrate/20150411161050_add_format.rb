class AddFormat < ActiveRecord::Migration
  def change
    add_column :todos, :format, :string
  end
end
