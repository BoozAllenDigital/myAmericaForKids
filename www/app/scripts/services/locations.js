'use strict';

angular.module('myAmericaApp').factory('locations', function(SERVER_API) {
	var locations = $resource(SERVER_API + '/locations');

	return locations;
});