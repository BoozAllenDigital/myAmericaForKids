require 'mongoid'
require 'sinatra'

require_relative '../models/users'

class UsersImpl

  def get_users(params)
    Users.where(user_name: params['userName'])
  end

  def post_user(params)
    if Users.where(userName: params['userName']).exists?
      return 'User already exists'
    else
      user = Users.new
      user.userName = params['userName']
      user.name = params['name']
      user.clan = params['clan']
      user.score = 0
      user.insert
      return 'User added'
    end
  end
end