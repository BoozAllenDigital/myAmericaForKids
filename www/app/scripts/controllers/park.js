angular.module('myAmericaApp').controller('ParkCtrl', 
	function($scope, $routeParams, recarea) {
	recarea.get({id: $routeParams.parkId}, function(recarea) {
		$scope.recarea = recarea;
	});
});