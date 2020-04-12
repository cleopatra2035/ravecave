class ChangeColumnNullToAlbums < ActiveRecord::Migration[5.2]
  def change
    remove_column :albums, :genre
  end
end
