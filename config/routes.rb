Rails.application.routes.draw do
  devise_for :users, :controllers => { omniauth_callbacks: 'omniauth_callbacks' }
  resources :nominees
  resources :polls
  resources :media
  resources :notices
  resources :comments
  resources :posts
  resources :spaces
  resources :users
  resources :spaces, :path => '/@' do
    member do
      put "like", to:    "spaces#upvote"
      put "dislike", to: "spaces#downvote"
    end
    resources :polls, :defaults => { :format => 'html' } do
      resources :candidates, :defaults => { :format => 'html' }
    end
    resources :posts, :defaults => { :format => 'html' }
    resources :announcements, :defaults => { :format => 'html' }
    resources :media, :defaults => { :format => 'html' }
  end
  root to: 'visitors#index'
  get '/auth/:provider/callback' => 'sessions#create'
  get '/signin' => 'sessions#new', :as => :signin
  get '/signout' => 'sessions#destroy', :as => :signout
  get '/auth/failure' => 'sessions#failure'
end
