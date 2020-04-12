# == Schema Information
#
# Table name: artists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Artist < ApplicationRecord
    validates :name, presence: true
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :albums,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Album

    has_many :tracks,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Track

end
