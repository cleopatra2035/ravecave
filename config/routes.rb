Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :artists, only: [:index, :show]
    resources :albums
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
  end
  
  root to: 'root#root'
end
