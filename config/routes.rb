Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#loadingpage'
  get 'index', to: 'pages#index', as: 'index'
  get 'contact', to: 'pages#contact'
  get 'services', to: 'pages#services'
  get 'laptop', to: 'pages#laptop'
  get 'fixe', to: 'pages#fixe'
  get 'phone', to: 'pages#phone'
  get 'console', to: 'pages#console'
end
