class Poll < ApplicationRecord
  belongs_to :space
  scope :published, -> {where(:published => true)}
  acts_as_votable
  is_impressionable

  def to_param
    @poll_friendlyurl = '@' + [space_user_id, User.find(space_user_id).name.to_s.parameterize].join("-") + '/~' + [space_id, Space.find(space_id).name.to_s.parameterize].join("-") + '/quiz/' + [id, title.parameterize].join("-")
    @poll_url = [id, title.parameterize].join("-")
  end

  def polls_path
    [space_id, User.find(space_id).name.to_s.parameterize].join("-") + '/quiz'
  end
end
