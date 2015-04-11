'use strict';

angular.module('oNetApp').factory('TaskVotes', function($resource, API_URL) {

  var TaskVote = $resource(API_URL + '/vote/task');

  function query(params, callback) {
    callback([]);
  }

  function save(body, callback) {
  	var taskVote = new TaskVote(body);
  	taskVote.$save();
  	callback(taskVote);
  }

  return {
    query: query,
    save: save
  }

});
