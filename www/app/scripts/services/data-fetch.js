
'use strict';

angular.module('oNetApp').factory('DataFetch', function($resource, API_URL) {
  var DataFetch = $resource(API_URL + '/data/solicitations/');

  function get(params, callback) {
    DataFetch.get(params, callback);
  }

  return {
    get: get
  }
});

