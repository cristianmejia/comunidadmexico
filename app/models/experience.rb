class Experience < ApplicationRecord
  belongs_to :space
  scope :published, -> {where(:published => true)}
  has_many :events, :dependent => :destroy
  acts_as_votable
  is_impressionable

  def to_param
    @experience_friendlyurl = '@' + [space.user.id, User.find(space.user.id).name.to_s.parameterize].join("-") + '/~' + [space_id, Space.find(space_id).name.to_s.parameterize].join("-") + '/live/' + [id, title.parameterize].join("-")
    @experience_url = [id, title.parameterize].join("-")
  end

  # def experiences_path
  #   [space_id, Space.find(space_id).name.to_s.parameterize].join("-") + '/live'
  # end

  # def experience_path
  #   [space_id, Space.find(space_id).name.to_s.parameterize].join("-") + '/live' + [id, title.parameterize].join("-")
  # end
end
