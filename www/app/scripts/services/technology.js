'use strict';

angular.module('oNetApp').factory('Technology', function($resource, $q, API_URL) {

	var Technology = $resource(API_URL + '/occupation/:id/tech/:userId');

	function query(params, callback) {
		return Technology.query(params, callback);
	}

	return {
		query: query
	}
});
