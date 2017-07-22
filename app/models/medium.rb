class Medium < ApplicationRecord
  belongs_to :space
	mount_uploader :url, AvatarUploader
	def space_media_path
		@space_url = [space.id, space.title.parameterize].join("-")
		'/@/' + @space_url + '/media/' + [id, title.parameterize].join("-")
	end
end
