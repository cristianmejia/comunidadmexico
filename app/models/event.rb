class Event < ApplicationRecord
  belongs_to :experience
  scope :published, -> {where(:published => true)}
end
