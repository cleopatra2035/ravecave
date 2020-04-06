class Track < ApplicationRecord
    validates :name, presence: true
    
    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Artist

    belongs_to :albums,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: :Album
end
