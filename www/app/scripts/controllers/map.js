'use strict';

/**
 * @ngdoc function
 * @name myAmericaApp.controller:MapCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAmericaApp
 */
angular.module('myAmericaApp')
  .controller('MapCtrl', function ($scope, mapboxService, recareas, $location) {
  	mapboxService.init({ accessToken: 'pk.eyJ1IjoiZWZ3aXoiLCJhIjoiWVIycVV6VSJ9.wGMdBSconq7jIy37o15GIw'});

  	var flickr = new Flickr({api_key: '8262b0943aab5ff21e2ce2e129c74cb0'});

  	function findPhotos(lat, lng) {
    	var lat = 37.839126586;
	  	var lng = -119.54084014;
  		var radius = 5;

	  	flickr.photos.search({
	  		media: 'photos',
	  		lat: lat,
	  		lng: lng,
	  		text: 'national park',
	  		radius: radius
	  	}, function(err, result) {
	  		result.photos.photo.forEach(function(photo) {
	  			var url = 'https://farm' + photo.farm 
	  			+ '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
	  			console.log(url);
	  		})
	  	});
  	}


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
