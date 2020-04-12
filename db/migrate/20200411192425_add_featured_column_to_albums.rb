class AddFeaturedColumnToAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :featured, :boolean, default: false, inclusion: [true, false]
    add_index :albums, :featured
  end
end
