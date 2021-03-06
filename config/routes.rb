Rails.application.routes.draw do
  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
    post '/rate' => 'rater#create', :as => 'rate'
    resources :users, :path => '/@' do
      resources :spaces, :defaults => { :format => 'html' }, :path => '/~' do
        member do
          put "like", to:    "spaces#like"
          put "unlike", to: "spaces#unlike"
        end
        resources :polls, :defaults => { :format => 'html' }, :path => '/quiz' do
          resources :nominees, :defaults => { :format => 'html' }, :path => '/ops'
        end
        resources :posts, :defaults => { :format => 'html' }, :path => '/blog' do
          resources :comments, :defaults => { :format => 'html' }
        end
        resources :experiences, :defaults => { :format => 'html' }, :path => '/live'
        resources :media, :defaults => { :format => 'html' }, :path => '/vlog'
        resources :notices, :defaults => { :format => 'html' }, :path => '/shout'
      end
    end
    root to: 'visitors#index'
  end
  devise_for :users
end
