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
            locations_impl.get_user_locations(request.body.read).to_json
          end

          post_location = lambda do
            locations_impl.create_location(request.body.read).to_json
          end

          app.get '/locations', &get_locations
          app.post '/location', &post_location
        end
      end
    end
  end
end