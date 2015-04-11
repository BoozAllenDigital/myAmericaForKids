require 'mongoid'

class Locations
  include Mongoid::Document

  store_in collection: 'Locations', database: 'mydb', session: 'default'

  field :'latitude', as: :'latitude', type: String
  field :'longitude', as: :'longtidue', type: String
  field :'recAreaId', as: :'recarea_id', type: String
  field :'timestamp', as: :'timestamp', type: Date
  field :'bonus', as: :'bonus', type: String

end