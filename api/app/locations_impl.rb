require 'mongoid'
require_relative '../models/location'

class LocationsImpl

  SECONDS_IN_DAY = 86400

  def get_user_locations(userName)
    if userName
      Location.where(user_name: userName)
    else
      Location.all
    end
  end

  def create_location(params)
    now_seconds = Time.now.to_i
    user = User.where(user_name: params['userName']).first

    if user.nil?
      return 'The specified user does not exist'
    else
      prev_location = Location.where(user_name: params['userName'], recarea_id: params['recAreaId']).first
      if prev_location
        prev_location_seconds = prev_location[:timestamp].to_i
        if (now_seconds - prev_location_seconds) < SECONDS_IN_DAY
          return 'It has been less than one day since checking in at this recreation area. Please try to check in after ' +
              (now_seconds - prev_location_seconds).to_s + ' seconds, or visit a different area in the meantime.'
        end
      end
    end

    location = Location.new
    location.userName = params['userName']
    location.latitude = params['latitude']
    location.longitude = params['longitude']
    location.recAreaId = params['recAreaId']
    location.timestamp = Time.now
    location.score = params['score'] || 1
    location.fromCamera = params['fromCamera']
    location.insert

    user = User.where(userName: params['userName']).first
    puts user.to_json
    user.update_attribute(:score, (user[:score] + params['score']))

    return 'Location added for user'
  end
end