class Experience < ApplicationRecord
  belongs_to :space
  scope :published, -> {where(:published => true)}
  has_many :events, :dependent => :destroy
  acts_as_votable
  is_impressionable
end
