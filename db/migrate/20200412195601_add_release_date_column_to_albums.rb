class AddReleaseDateColumnToAlbums < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :release_date, :datetime
    add_column :albums, :description, :string
  end
end
