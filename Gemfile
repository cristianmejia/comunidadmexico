source 'https://rubygems.org'
git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end
ruby '2.4.1'
gem 'xmlrpc'
gem 'rails', '~> 5.1.2'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end
group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem 'bootstrap', '~> 4.0.0.alpha6'
gem 'haml-rails'
gem 'high_voltage'
gem 'jquery-rails'
gem 'pundit'
gem 'administrate'
gem 'tether-rails'
gem 'devise'
gem 'devise_invitable'
gem 'devise_mailchimp', :git => 'git://github.com/cristianmejia/devise_mailchimp.git'
gem 'omniauth'
gem 'omniauth-github'
gem 'omniauth-openid'
gem 'omniauth-twitter'
gem 'omniauth-facebook'
gem 'omniauth-linkedin'
gem 'omniauth-oauth2'
gem 'high_voltage'
gem 'pundit'
gem 'less-rails'
gem 'breadcrumbs_on_rails'
gem 'carrierwave'
gem 'font-awesome-rails'
gem 'ratyrate', :git => 'git://github.com/cristianmejia/ratyrate.git'
gem 'acts_as_votable'
gem 'impressionist'
gem 'mailgun_rails'
gem 'tinymce-rails'
gem 'geocoder'
gem 'Bootstrap-Image-Gallery-rails'

group :development do
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
  gem 'factory_girl_rails'
  gem 'faker'
  gem 'pry-rails'
  gem 'pry-rescue'
  gem 'rspec-rails'
  gem 'rubocop'
  gem 'sqlite3'
  gem 'thin'
end
group :production do
  gem 'passenger'
  gem 'pg'
end
group :test do
  gem 'database_cleaner'
  gem 'launchy'
end
