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
    resources :spaces, :defaults => { :format => 'html' } do
      member do
        put "like", to:    "spaces#like"
        put "unlike", to: "spaces#unlike"
      end
      resources :polls, :defaults => { :format => 'html' } do
        resources :nominees, :defaults => { :format => 'html' }
      end
    end
    resources :posts, :defaults => { :format => 'html' }
    resources :announcements, :defaults => { :format => 'html' }
    resources :media, :defaults => { :format => 'html' }
  end
  root to: 'visitors#index'
  devise_for :users
end
