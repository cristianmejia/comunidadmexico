class Event < ApplicationRecord
  belongs_to :experience
  belongs_to :provider, :class_name => "User"
  belongs_to :consumer, :class_name => "User"
  scope :published, -> {where(:published => true)}
end
