require_relative '../models/locations'

class LocationsImpl

  SECONDS_IN_DAY = 86400

  def get_user_locations(userName)
    Locations.where(user_name: userName)
  end

  def create_location(params)
    now_seconds = Time.now.to_i
    prev_location = Locations.where(userName: params['userName'], recarea_id: params['recAreaId']).first
    if prev_location
      prev_location_seconds = prev_location[:timestamp].to_i
      if (now_seconds - prev_location_seconds) < SECONDS_IN_DAY
        return 'It has been less than one day since checking in at this recreation area. Please try to check in after ' +
            (now_seconds - prev_location_seconds).to_s + ' seconds, or visit a different area in the meantime.'
      end
    end

    location = Locations.new
    location.userName = params['userName']
    location.latitude = params['latitude']
    location.longitude = params['longitude']
    location.recAreaId = params['recAreaId']
    location.timestamp = Time.now
    location.score = params['score'] || 1
    location.fromCamera = params['fromCamera']
    location.insert
    return 'Location added for user'
  end
end