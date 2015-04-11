require 'sinatra'
require 'mongoid'
require_relative '../models/locations'
require_relative '../app/locations_impl'

module Sinatra
  module SampleApp
    module Routing
      module Locations
        def self.registered(app)

          locations_impl = LocationsImpl.new

          get_locations = lambda do
            locations_impl.get_user_locations(params['userName']).to_json(except: :_id)
          end

          post_location = lambda do
            locations_impl.create_location(JSON.parse(request.body.read)).to_json
          end

          app.get '/locations', &get_locations
          app.post '/locations', &post_location
        end
      end
    end
  end
end