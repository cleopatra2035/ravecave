class Album < ApplicationRecord
    validates :name, presence: true

    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Artist

    has_many :tracks,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: :Track
end
