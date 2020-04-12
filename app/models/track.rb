# == Schema Information
#
# Table name: tracks
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  ord        :integer          not null
#  artist_id  :integer          not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Track < ApplicationRecord
    validates :name, :ord, presence: true
    validates :ord, uniqueness: { scope: :album }
    
    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Artist

    belongs_to :album,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: :Album
end
