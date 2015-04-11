'use strict';

angular.module('oNetApp').controller('SignInCtrl', function ($routeParams, $scope ) {

  $scope.signIn = function signin(){
    console.log($scope.email);
    console.log($scope.password);
  }

});
