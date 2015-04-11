'use strict';

/**
 * @ngdoc function
 * @name myAmericaForKidsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myAmericaForKidsApp
 */
angular.module('myAmericaForKidsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
