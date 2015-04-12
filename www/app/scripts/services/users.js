'use strict';

angular.module('myAmericaApp').factory('users', function(SERVER_API) {
	var users = $resource(SERVER_API + '/users');

	return users;
});