'use strict';

angular.module('oNetApp').factory('Tasks', function($resource, API_URL) {
	var Tasks = $resource(API_URL + '/occupation/:id/tasks/1');

	function query(params, callback) {
		Tasks.query(params, callback);
	}

	return {
		query: query
	}

});
