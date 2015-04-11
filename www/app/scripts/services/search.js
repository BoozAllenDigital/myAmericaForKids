'use strict';

angular.module('oNetApp').factory('Search', function($resource, API_URL) {
  var Search = $resource(API_URL + '/occupations/');

  function get(params) {
    return Search.query(params).$promise;
  }

  return {
    get: get
  }

});
