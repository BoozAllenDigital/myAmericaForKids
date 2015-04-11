'use strict';

angular.module('oNetApp').factory('Data', function($resource, API_URL) {
  var Data = $resource(API_URL + '/data/:questionId?answer1=:answer1');

  function get(params, callback) {
    Data.get(params, callback);
  }

  return {
    get: get
  }

});
