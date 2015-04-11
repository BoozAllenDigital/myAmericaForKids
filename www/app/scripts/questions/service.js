'use strict';

angular.module('oNetApp').factory('Questions', function($resource, API_URL) {
  var Questions = $resource(API_URL + '/questions/');

  function query(params, callback) {
    Questions.query(params, callback);
  }

  return {
    query: query
  }

});
