Rails.application.routes.draw do
  post '/rate' => 'rater#create', :as => 'rate'
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
  devise_for :users, :controllers => { omniauth_callbacks: 'omniauth_callbacks' }
    devise_scope :user do
      authenticated :user do
        root 'home#index', as: :authenticated_root
    end

    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
  end
end
