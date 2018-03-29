class Space < ApplicationRecord
	belongs_to :user
	has_many :polls, :dependent => :destroy
	has_many :nominees_poll, :through => :polls, :source => :nominees, :dependent => :destroy
	has_many :posts, :dependent => :destroy
	has_many :media, :dependent => :destroy
	ratyrate_rateable "trustworthy", "popular", "freshines"
	scope :published, -> {where(:published => true)}
	reverse_geocoded_by :lat, :long, :local => :location
	after_validation :reverse_geocode
	mount_uploader :avatar, FileUploader
	acts_as_votable
	is_impressionable counter_cache: true
	validates_presence_of :title, :name, :local

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
		@space_friendlyurl = '@' + [user_id, User.find(user_id).name.to_s.parameterize].join("-") + '/~' + [id, title.parameterize].join("-")
		@space_url = [id, title.parameterize].join("-")
	end
end
