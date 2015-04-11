require 'mongoid'
require 'sinatra'

require_relative '../models/users'

class UsersImpl

  def get_users(params)
    Users.where(user_name: params['userName'])
  end

  def post_user(params)
    user = Users.new
    user.userName = params['userName']
    user.name = params['name']
    user.clan = params['clan']
    user.insert
  end
end