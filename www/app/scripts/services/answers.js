
'use strict';

angular.module('oNetApp').factory('Answers', function($resource, API_URL) {
  var Answers = $resource(API_URL + '/answers');

  function query(params, callback) {
    Answers.query(params, callback);
  }

  return {
    query: query
  }
});

