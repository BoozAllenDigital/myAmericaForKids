'use strict';

/**
 * @ngdoc function
 * @name myAmericaForKidsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAmericaForKidsApp
 */
angular.module('myAmericaForKidsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
