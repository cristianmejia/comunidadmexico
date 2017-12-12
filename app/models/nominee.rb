class Nominee < ApplicationRecord
  scope :published, -> {where(:published => true)}
  mount_uploader :avatar, FileUploader
  acts_as_votable
  is_impressionable
  belongs_to :poll
end
