class AddMoreColumnsToArtists < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :location, :string
    add_index :artists, :location
  end
end
