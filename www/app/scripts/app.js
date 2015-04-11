'use strict';

<<<<<<< HEAD
/**
 * @ngdoc overview
 * @name myAmericaApp
 * @description
 * # myAmericaApp
 *
 * Main module of the application.
 */
angular
  .module('myAmericaApp', [
    'ngAnimate',
    'ngCookies',
=======

angular
  .module('oNetApp', [
    'angularUtils.directives.dirPagination',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
>>>>>>> api_dev
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
<<<<<<< HEAD
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
=======
  ])
  .constant('API_URL', 'http://52.4.204.227:9292')
  .config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('bower_components/angular-utils-pagination/dirPagination.tpl.html');
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/docs', {
        templateUrl: 'views/static/test.html'
      })
      .when('/:urlLink/:questionId', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
	  .when('/home', {
	    templateUrl: 'home.html'
	  })
      //.when('/search/:searchQuery', {
      //  templateUrl: 'views/search.html',
      //  controller: 'SearchCtrl'
      //})
      //.when('/search/', {
      //  templateUrl: 'views/search.html',
      //  controller: 'SearchCtrl'
      //})
      //.when('/occupation', {
      //  templateUrl: 'views/occupation.html',
      //  controller: 'OccupationCtrl'
      //})
      //.when('/occupation/:id', {
      //  templateUrl: 'views/occupation.html',
      //  controller: 'OccupationCtrl'
      //})
      //.when('/signin/', {
      //  templateUrl: 'views/signin.html',
      //  controller: 'SignInCtrl'
      //})
      //.when('/signup/', {
      //  templateUrl: 'views/signup.html',
      //  controller: 'SignUpCtrl'
      //})

      .otherwise({
        redirectTo: '/'
>>>>>>> api_dev
      });
  });
