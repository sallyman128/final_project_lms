Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/courses', to: 'course#index'
  get '/courses/:id', to: 'course#show'
  get '/teachers', to: 'teacher#index'
  get '/teachers/:id', to: "teacher#show"
end
