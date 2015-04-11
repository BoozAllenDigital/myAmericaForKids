'use strict';

/**
 * @ngdoc function
 * @name wwwApp.controller:MapCtrl
 * @description
 * # AboutCtrl
 * Controller of the wwwApp
 */
angular.module('wwwApp')
  .controller('MapCtrl', function ($scope, mapboxService) {
  	mapboxService.init({ accessToken: 'pk.eyJ1IjoiZWZ3aXoiLCJhIjoiWVIycVV6VSJ9.wGMdBSconq7jIy37o15GIw'});

  });
