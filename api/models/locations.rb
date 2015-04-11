require 'mongoid'

class Locations
  include Mongoid::Document

  store_in collection: 'Locations', database: 'mydb', session: 'default'

  field :'userName', as: :user_name, type: String
  field :'latitude', as: :latitude, type: String
  field :'longitude', as: :longtidue, type: String
  field :'recAreaId', as: :recarea_id, type: String
  field :'timestamp', as: :timestamp, type: Date
  field :'score', as: :score, type: Integer
  field :'fromCamera', as: :from_camera, type: Boolean

end