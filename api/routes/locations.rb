require 'sinatra'
require 'mongoid'
require_relative '../models/locations'
require_relative '../models/users'

module Sinatra
  module SampleApp
    module Routing
      module Locations
        def self.registered(app)

          locations_impl = LocationsImpl.new

          get_locations = lambda do

          end

          post_location = lambda do
            locations_impl.create_location(request.body.read)
          end

          app.post '/location', &post_location
        end
      end
    end
  end
end