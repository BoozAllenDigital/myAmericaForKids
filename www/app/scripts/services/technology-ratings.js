'use strict';

angular.module('oNetApp').factory('TechRating', function($resource, API_URL) {

  var TechRating = $resource(API_URL + '/rating/tech/');

  function query(params, callback) {
    return TechRating.query(params, callback);
  }

  function save(body, callback) {
    var techRating = new TechRating(body);
    techRating.$save();
    callback(techRating);
  }

  return {
    query: query,
    save: save
  }

});
