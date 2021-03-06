class User < ApplicationRecord
  TEMP_EMAIL_PREFIX = 'user@comunidadmexi.co'
  TEMP_EMAIL_REGEX = /\Auser@comunidadmexi.co/
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :invitable, :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable, :mailchimp, :omniauthable
  enum role: [:user, :vip, :admin, :provider, :consumer]
  after_initialize :set_default_role, :if => :new_record?
  has_many :spaces, :dependent => :destroy
  has_many :provider_event, class_name: 'Event',
    foreign_key: 'provider_id'
  has_many :consumer_event, class_name: 'Event',
    foreign_key: 'consumer_id'
  # An user can get votes from the community
  acts_as_voter
  is_impressionable

  validates_format_of :email, :without => TEMP_EMAIL_REGEX, on: :update

  def self.find_for_oauth(auth, signed_in_resource = nil)

  # Get the identity and user if they exist
  identity = Identity.find_for_oauth(auth)

  # If a signed_in_resource is provided it always overrides the existing user
  # to prevent the identity being locked with accidentally created accounts.
  # Note that this may leave zombie accounts (with no associated identity) which
  # can be cleaned up at a later date.
  user = signed_in_resource ? signed_in_resource : identity.user

  # Create the user if needed
  if user.nil?

    # Get the existing user by email if the provider gives us a verified email.
    # If no verified email was provided we assign a temporary email and ask the
    # user to verify it on the next step via UsersController.finish_signup
    email_is_verified = auth.info.email && (auth.info.verified || auth.info.verified_email)
    email = auth.info.email if email_is_verified
    user = User.where(:email => email).first if email

    # Create the user if it's a new registration
    if user.nil?
      user = User.new(
        name: auth.extra.raw_info.name,
        #username: auth.info.nickname || auth.uid,
        email: email ? email : "#{TEMP_EMAIL_PREFIX}-#{auth.uid}-#{auth.provider}.com",
        password: Devise.friendly_token[0,20]
      )
      user.skip_confirmation!
      user.save!
    end
  end

  # Associate the identity with the user if needed
  if identity.user != user
    identity.user = user
    identity.save!
  end
  user
  end

  def set_default_role
    if User.count == 0
      self.role ||= :admin
    else
      self.role ||= :user
    end
  end

  def admin?
    self.roles.include?(:admin)
  end

  def email_verified?
    self.email && self.email !~ TEMP_EMAIL_REGEX
  end
  #TODO: Remove if not required
  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth['provider']
      user.uid = auth['uid']
      if auth['info']
         user.name = auth['info']['name'] || ""
      end
    end
  end

  def spaces_path
    [id, name.to_s.parameterize].join("-") + '/~'
  end

end
