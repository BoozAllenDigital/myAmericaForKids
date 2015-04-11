require 'sinatra'
require 'mongoid'
require_relative '../models/users'
require_relative '../app/users_impl'

module Sinatra
  module SampleApp
    module Routing
      module Users
        def self.registered(app)

          users_impl = UsersImpl.new

          get_users = lambda do
            users_impl.get_users(request.body.read).to_json
          end

          post_user = lambda do
            users_impl.post_user(request.body.read)
            body ''
            status 200
          end

          app.get '/users', &get_users
          app.post '/user', &post_user
        end
      end
    end
  end
end