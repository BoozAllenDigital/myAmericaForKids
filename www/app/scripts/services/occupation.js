//'use strict';
//
//angular.module('oNetApp').factory('occupation', function($resource, API_URL) {
//  var apiHomeUrl = API_URL + '/occupation/';
//  return $resource("", {},
//    {
//      'getAll': { method: "GET", params: {
//        id: "query"
//      }, url: apiHomeUrl}
//
//    });
//
//});


'use strict';

angular.module('oNetApp').factory('Occupation', function($resource, API_URL) {
  var Occupation = $resource(API_URL + '/occupation/:id' );

  function get(params, callback) {
    return Occupation.query(params, callback);
  }

  return {
    get: get
  }

});
