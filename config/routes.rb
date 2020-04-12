Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :users, only: [:create, :show]
    resources :tracks, only: [:index, :show]
    resource :session, only: [:create, :destroy, :show]
  end
  
  root to: 'root#root'
end
