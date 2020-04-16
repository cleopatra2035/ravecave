# == Schema Information
#
# Table name: albums
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  artist_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  featured     :boolean          default(FALSE)
#  genre        :string           not null
#  release_date :datetime
#  description  :string
#
class Album < ApplicationRecord
    validates :name, :genre, presence: true

    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Artist

    has_many :tracks,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: :Track

    has_one_attached :artwork
end
