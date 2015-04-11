'use strict';

angular.module('oNetApp')
  .controller('TechnologyCtrl', function ($scope, $routeParams, $modal,
    Technology, TechRating) {

    $scope.occupationId = $routeParams.id;

    Technology.query({ id: $routeParams.id, userId: 1}, function(data) {
      $scope.technologies = data;
    });

    $scope.updateRating = function updateRating(soc, commodityCode, userId, rating, tech) {
      tech.rating = rating;
      var tech = {
        'O*NET-SOC Code': soc,
        'Commodity Code': commodityCode,
        'user_id': userId,
        'rating': rating
      };

      TechRating.save(tech);
    }

  });
