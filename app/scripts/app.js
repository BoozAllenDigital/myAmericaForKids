'use strict';

/**
 * @ngdoc overview
 * @name myAmericaForKidsApp
 * @description
 * # myAmericaForKidsApp
 *
 * Main module of the application.
 */
angular
  .module('myAmericaForKidsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
