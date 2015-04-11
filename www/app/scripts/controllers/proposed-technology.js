'use strict';

angular.module('oNetApp')
  .controller('ProposedTechnologyCtrl', function ($scope, $routeParams, $modal, 
    ProposedTechnology) {
    
    ProposedTechnology.query({ id: $routeParams.id }, function(data) {
      $scope.proposedTechnologies = data;
    });

  	$scope.showAddTechModal = function() {
  		var modalInstance = $modal.open({
  			templateUrl: 'views/technologies/new.html',
  			controller: 'TechnologyModalCtrl'
  		});

  		modalInstance.result.then(function(newTechnology) {
  			$scope.proposedTechnologies.push(newTechnology);
  		})
  	}
});

angular.module('oNetApp').controller('TechnologyModalCtrl', 
	function($modalInstance, $routeParams, $scope, ProposedTechnology, Occupation) {
	$scope.technology = {};

  Occupation.get({id: $routeParams.id}, function(currentOccupation) {
    $scope.occupation = currentOccupation[0];
  });

	$scope.addTechnology = function() {
	  ProposedTechnology.create(
	  	{id: $routeParams.id}, 
	  	$scope.technology,
	  	function(newTechnology) {
			$modalInstance.close(newTechnology);
	  });
	}

	$scope.cancel = function() {
	  $modalInstance.dismiss('cancel');
	}
});