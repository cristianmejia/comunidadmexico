class Poll < ApplicationRecord
  belongs_to :space
  scope :published, -> {where(:published => true)}
  acts_as_votable
  is_impressionable
end
