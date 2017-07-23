class Space < ApplicationRecord
	has_many :polls, :dependent => :destroy
	has_many :candidates_poll, :through => :polls, :source => :candidates, :dependent => :destroy
	has_many :posts, :dependent => :destroy
	has_many :media, :dependent => :destroy
	ratyrate_rateable "trustworthy", "popular", "freshines"
	scope :published, -> {where(:published => true)}
	mount_uploader :url, FileUploader
	acts_as_votable
	is_impressionable
	reverse_geocoded_by :latitude, :longitude, :address => :location
	after_validation :reverse_geocode  # auto-fetch address
	def posts_path
		[id, title.parameterize].join("-") + '/posts'
	end
	def polls_path
		[id, title.parameterize].join("-") + '/polls'
	end
	def media_path
		[id, title.parameterize].join("-") + '/media'
	end
	def to_param
		@space_url = [id, title.parameterize].join("-")
	end
end
