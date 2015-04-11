require_relative '../models/locations'

class LocationsImpl

  def get_user_locations(params)
    Locations.where(user_name: params['userName'])
  end

  def create_location(params)
    Locations.create(latitude: params['latitude'], longitude: params['longitude'], recarea_id: params['recareaId'], timestamp: Time.now, bonus: params['bonus'])
  end
end