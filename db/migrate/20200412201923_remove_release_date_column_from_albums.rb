class RemoveReleaseDateColumnFromAlbums < ActiveRecord::Migration[5.2]
  def change
    remove_column :albums, :release_date
  end
end
