'use strict';

/**
 * @ngdoc overview
 * @name wwwApp
 * @description
 * # wwwApp
 *
 * Main module of the application.
 */
angular
  .module('wwwApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-mapbox'
  ])
  .constant('RIDB_API', {
    HOST: 'https://ridb.recreation.gov/api/v1',
    KEY: '718A093253714004B839308AE31E7AD8'
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .when('/reader', {
        templateUrl: 'views/reader.html',
        controller: 'ReaderCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/map'
      });
  });
