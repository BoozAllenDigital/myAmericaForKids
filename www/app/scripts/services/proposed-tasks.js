
'use strict';

angular.module('oNetApp').factory('ProposedTasks', function($resource, API_URL) {
  var ProposedTask = $resource(API_URL + '/occupation/:id/proposed/tasks');

  function query(params, callback) {
    ProposedTask.query(params, callback);
  }

	function create(params, body, callback) {
    var ProposedTaskCreate = ProposedTask.bind(params);
    var proposedTask = new ProposedTaskCreate(body);
    proposedTask.$save();
		callback(proposedTask);
	}

  return {
    query: query,
    create: create
  }
});
