Rails.application.routes.draw do
  root to: 'react#index'
  resources :sessions, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  resources :registrations, only: [:create]

  match '*path', to: 'react#index', via: :all
end
