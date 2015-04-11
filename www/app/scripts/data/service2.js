'use strict';

angular.module('oNetApp').factory('Data2', function($resource, API_URL) {
  var Data = $resource(API_URL + '/data/:questionId?answer1=:answer1&answer2=:answer2');

  function get(params, callback) {
    Data.get(params, callback);
  }

  return {
    get: get
  }

});
