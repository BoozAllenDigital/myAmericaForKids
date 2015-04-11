'use strict';

/**
 * @ngdoc function
 * @name myAmericaApp.controller:MapCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAmericaApp
 */
angular.module('myAmericaApp')
  .controller('MapCtrl', function ($scope, mapboxService, recareas) {
  	mapboxService.init({ accessToken: 'pk.eyJ1IjoiZWZ3aXoiLCJhIjoiWVIycVV6VSJ9.wGMdBSconq7jIy37o15GIw'});
  	recareas.get({query: 'yosemite'}, function(results) {
  		recareas = [];
  		results.RECDATA.forEach(function(result) {
  			if (result.RecAreaLatitude != null && result.RecAreaLatitude != "") {
  				recareas.push(result);
  			}
  		});
  		console.log(recareas);
  		$scope.recareas = recareas;
  	});
  });
