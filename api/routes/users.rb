require 'sinatra'
require 'mongoid'
require_relative '../models/users'

module Sinatra
  module SampleApp
    module Routing
      module Users
        def self.registered(app)

          get_users = lambda do
            Users.where(user_name: params['userName'])
          end
          app.get '/users', &get_users

          post_user = lambda do
            user = Users.new
            user.user_name = params['userName']
            user.name = params['name']
            user.clan = params['clan']
            user.insert
          end
          app.post '/user', &post_user
        end
      end
    end
  end
end