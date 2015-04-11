require_relative '../models/locations'

class LocationsImpl

  def get_user_locations(userName)
    Locations.where(user_name: userName)
  end

  def create_location(params)
    location = Locations.new
    location.userName = params['userName']
    location.latitude = params['latitude']
    location.longitude = params['longitude']
    location.recAreaId = params['recareaId']
    location.timestamp = Time.now
    location.score = params['score']
    location.fromCamera = params['fromCamera']
    location.insert
    return 'Location added for user'
  end
end