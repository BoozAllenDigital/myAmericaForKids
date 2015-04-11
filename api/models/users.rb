require 'mongoid'

class Users
  include Mongoid::Document

  store_in collection: 'Users', database: 'mydb', session: 'default'

  field :'name', as: :'name', type: String
  field :'clan', as: :'clan', type: String
end