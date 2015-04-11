'use strict';

angular.module('oNetApp').factory('Data3', function($resource, API_URL) {
  var Data = $resource(API_URL + '/data/');

  function get(params, callback) {
    Data.get(params, callback);
  }

  return {
    get: get
  }

});
