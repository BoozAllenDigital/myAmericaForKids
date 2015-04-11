'use strict';

angular.module('oNetApp').factory('TaskRatings', function($resource, API_URL) {

  var TaskRating = $resource(API_URL + '/rating/task/');

  function query(params, callback) {
    return TaskRating.query(params, callback);
  }

  function save(body, callback) {
    var taskRating = new TaskRating(body);
    taskRating.$save();
    callback(taskRating);
  }

  return {
    query: query,
    save: save
  }

});
