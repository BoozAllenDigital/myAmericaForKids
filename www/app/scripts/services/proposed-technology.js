'use strict';

angular.module('oNetApp').factory('ProposedTechnology', function($resource, $q, API_URL) {
	
	var ProposedTechnology = $resource(API_URL + '/occupation/:id/proposed/tech');

	var proposed = [];

	function create(params, body, callback) {
		var ProposedTechnologyCreate = ProposedTechnology.bind(params);
		var tech = new ProposedTechnologyCreate(body);
		tech.$save();
		callback(tech);
	}

	function query(params, callback) {
		ProposedTechnology.query(params, callback);
	}

	return {
		query: query,
		create: create
	}
});
