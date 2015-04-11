'use strict';

angular.module('oNetApp').controller('QuestionsCtrl', function ($routeParams, $scope, Questions) {
  Questions.query({ id: $routeParams.id}, function(data) {
  });
});
