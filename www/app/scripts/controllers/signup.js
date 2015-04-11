'use strict';

angular.module('oNetApp').controller('SignUpCtrl', function ($routeParams, $scope ) {

  $scope.signUp = function signUp(){
    console.log($scope.name);
    console.log($scope.email);
    console.log($scope.password);
    console.log($scope.repeatPassword);
  }

});
