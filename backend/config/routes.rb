Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]

      post '/login', to: 'auth#create'

      resources :courses, only: [:index, :create, :destroy, :update]

      post '/courses/:course_id/students/:id', to: 'courses#add_student'
      delete '/courses/:course_id/students/:id', to: 'courses#remove_student'
      resources :assignments, only: [:create]
    end
  end
end
