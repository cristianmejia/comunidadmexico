Rails.application.routes.draw do
  post '/rate' => 'rater#create', :as => 'rate'
  resources :nominees
  resources :polls
  resources :media
  resources :notices
  resources :comments
  resources :posts
  resources :spaces
  resources :users, :path => '/@' do
    resources :spaces, :defaults => { :format => 'html' }, :path => '/~' do
      member do
        put "like", to:    "spaces#like"
        put "unlike", to: "spaces#unlike"
      end
      resources :polls, :defaults => { :format => 'html' }, :path => '/quiz' do
        resources :nominees, :defaults => { :format => 'html' }
      end
    end
    resources :posts, :defaults => { :format => 'html' }, :path => '/blog'
    resources :experiences, :defaults => { :format => 'html' }, :path => '/live'
    resources :media, :defaults => { :format => 'html' }, :path => '/vlog'
  end
  root to: 'visitors#index'
  devise_for :users
end
