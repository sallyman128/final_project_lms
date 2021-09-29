Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      get '/profile', to: 'users#profile'
      get '/profile/courses', to: 'users#my_courses'

      post '/login', to: 'auth#create'

      resources :courses, only: [:index]

    end
  end
end
