require 'mongoid'
require 'sinatra'

require_relative '../models/users'

class UsersImpl

  def get_users(params)
    if params['clan']
      Users.where(clan: params['clan'])
    else
      Users.all
    end
  end

  def get_users_by_clan(params)
    Users.where(clan: params['clan'])
  end

  def post_user(params)
    if Users.where(userName: params['userName']).exists?
      return 'User already exists'
    else
      user = Users.new
      user.userName = params['userName']
      user.name = params['name']
      user.clan = params['clan']
      user.insert
      return 'User created'
    end
  end
end