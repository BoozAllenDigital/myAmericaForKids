require 'mongoid'
require 'sinatra'

require_relative '../models/users'

class UsersImpl

  def get_users(userName, clan)
    if clan
      Users.where(clan: clan)
    elsif userName
      Users.where(userName: userName)
    else
      Users.all
    end
  end

  def get_users_by_clan(params)
    Users.where(clan: params['clan'])
  end

  def get_top_users_for_clan(clan, quantity)
    Users.where(clan: clan).desc(:score).limit(quantity)
  end

  def post_user(params)
    puts params['userName']
    if Users.where(user_name: params['userName']).exists?
      return 'User already exists'
    else
      user = Users.new
      user.userName = params['userName']
      user.firstName = params['firstName']
      user.lastName = params['lastName']
      user.clan = params['clan']
      user.score = 0
      user.insert
      return 'User created'
    end
  end
end