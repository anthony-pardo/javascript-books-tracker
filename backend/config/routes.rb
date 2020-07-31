Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :habits do
    resources :pomodoros
  end

  resources :pomodoros 
end
