'use strict';

angular.module('myAmericaApp').factory('leaderboard', function(SERVER_API) {
	var leaderboard = $resource(SERVER_API + '/users/leaderboard');

	return leaderboard;
});