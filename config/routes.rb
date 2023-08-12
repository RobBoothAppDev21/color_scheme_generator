Rails.application.routes.draw do
  root "colors#index"

  get '/colors', to: 'colors#index'

  # get "/", as: "colors/index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
