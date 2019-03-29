source 'https://rubygems.org'
git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end
ruby '2.4.1'
gem 'xmlrpc'
gem 'rails'
gem 'puma'
gem 'sass-rails'
gem 'uglifier'
gem 'coffee-rails'
gem 'turbolinks'
gem 'jbuilder'
gem 'sqlite3', group: :development
gem 'pg', '0.18.1', group: :production
group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.7', '>= 2.7.1'
  gem 'selenium-webdriver'
end
group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem 'bootstrap'
gem 'haml-rails', '~> 1.0'
gem 'jquery-rails'
gem 'pundit'
gem 'administrate'
gem 'tether-rails'
gem 'devise'
gem 'devise-i18n'
gem 'devise_invitable'
gem 'devise_mailchimp', :git => 'git://github.com/cristianmejia/devise_mailchimp.git'
gem 'devise_token_auth'
gem 'devise-bootstrap-views'
gem 'omniauth'
gem 'omniauth-github'
gem 'omniauth-openid'
gem 'omniauth-twitter'
gem 'omniauth-facebook'
gem 'omniauth-linkedin'
gem 'omniauth-oauth2'
gem 'high_voltage'
# gem 'less-rails'
gem 'breadcrumbs_on_rails'
gem 'carrierwave'
gem 'font-awesome-rails'
gem 'ratyrate', :git => 'git://github.com/cristianmejia/ratyrate.git'
gem 'acts_as_votable'
gem 'impressionist'
gem 'mailgun_rails'
gem 'tinymce-rails'
gem 'geocoder'
# gem 'Bootstrap-Image-Gallery-rails'
gem 'popper_js'
gem 'rails-i18n'
gem 'metainspector'
gem 'mini_racer'
group :development do
  gem 'binding_of_caller'
  gem 'better_errors'
  gem 'guard-bundler'
  gem 'guard-rails'
  gem 'guard-rspec'
  gem 'html2haml'
  gem 'rails_layout'
  gem 'rb-fchange', :require=>false
  gem 'rb-fsevent', :require=>false
  gem 'rb-inotify', :require=>false
  gem 'spring-commands-rspec'
end
group :development, :test do
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'pry-rails'
  gem 'pry-rescue'
  gem 'rspec-rails'
  gem 'rubocop'
  gem 'thin'
end
group :production do
  gem 'passenger'
end
group :test do
  gem 'database_cleaner'
  gem 'launchy'
end
