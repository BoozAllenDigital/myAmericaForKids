'use strict';

/**
 * @ngdoc function
 * @name myAmericaApp.controller:MapCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAmericaApp
 */
angular.module('myAmericaApp')
  .controller('MapCtrl', function ($scope, mapboxService, recareas, $location, $timeout) {
  	mapboxService.init({ 
  		accessToken: 'pk.eyJ1IjoiZWZ3aXoiLCJhIjoiWVIycVV6VSJ9.wGMdBSconq7jIy37o15GIw',
  	});

  	$timeout(function() {
	  	var map = mapboxService.getMapInstances()[0];
  	}, 100);

  	function startLoading() {
  		$('#loadingIndicator').show();
  	}
  	function endLoading() {
  		$('#loadingIndicator').hide();
  	}

  	function loadRecareas(recareas) {
	  	var results = [];
  		recareas.forEach(function(result) {
  			if (result.RecAreaLatitude != null && result.RecAreaLatitude != "") {
  				results.push(result);
  			}
  		});
  		$scope.recareas = results;
  		mapboxService.fitMapToMarkers();

  		endLoading();	
  	}
  	
	function searchRecareas(query) {
		recareas.get({query: query}, loadRecareas);
	}

	$scope.locate = function() {
		startLoading();
		navigator.geolocation.getCurrentPosition(function(geoposition) {
			console.log(geoposition.coords);
			recareas.get({
				latitude: geoposition.coords.latitude,
				longitude: geoposition.coords.longitude,
				radius: 5
			}, function(results) {
				var recarea = results.RECDATA[0];
				loadRecareas([ recarea ]);
				$location.path('/park/' + recarea.RecAreaID);
			});
		});
	}

  	$scope.search = function() {
  		startLoading();
  		searchRecareas($scope.query);
  	}
  });
