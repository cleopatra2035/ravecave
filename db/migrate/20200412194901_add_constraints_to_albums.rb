class AddConstraintsToAlbums < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:albums, :genre, false, "music")
  end
end
