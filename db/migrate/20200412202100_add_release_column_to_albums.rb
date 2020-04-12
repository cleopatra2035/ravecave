class AddReleaseColumnToAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :release_date, :date
  end
end
