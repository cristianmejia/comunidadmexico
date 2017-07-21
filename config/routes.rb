Rails.application.routes.draw do
  resources :nominees
  resources :polls
  resources :media
  resources :notices
  resources :comments
  resources :posts
  resources :spaces
  resources :users
  root to: 'visitors#index'
  get '/auth/:provider/callback' => 'sessions#create'
  get '/signin' => 'sessions#new', :as => :signin
  get '/signout' => 'sessions#destroy', :as => :signout
  get '/auth/failure' => 'sessions#failure'
end
