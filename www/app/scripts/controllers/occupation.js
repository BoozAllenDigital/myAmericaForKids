'use strict';

angular.module('oNetApp')
  .controller('OccupationCtrl', function ($scope, $routeParams, $location, Occupation) {

    Occupation.get({ id: $routeParams.id}, function(occupation) {
      $scope.occupation = occupation[0];
    });

    console.log();

  });
