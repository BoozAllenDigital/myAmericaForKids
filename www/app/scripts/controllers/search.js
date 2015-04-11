'use strict';

angular.module('oNetApp')
  .controller('SearchCtrl', function ($scope, $location, Search, $routeParams) {

    console.log('test:' + $routeParams.searchQuery);

    if($routeParams.searchQuery){
      console.log(JSON.stringify($routeParams.searchQuery));
      var searchQuery = ($routeParams.searchQuery);
      $scope.searchQuery = searchQuery;
      $('#searchInput').val(searchQuery);
      $scope.searchInput = searchQuery;

      $scope.searchResults=[];
      Search.get({ text: $routeParams.searchQuery}).then(function(search) {
        $scope.searchResults = search;
        console.log($scope.searchResults);
      });


      //getJobs($routeParams.searchQuery);
    }
    else{ //haven't arrived to /search with a search term in the url

    }

    function getJobs(query){

      (new search()).$getAll({Title:query})
        .then(function(data) {
          $scope.results = data;
        })
    }

    $scope.executeJobSearch = function executeJobSearch(){
      console.log('in execute');
      console.log($scope.searchInput);

      $scope.searchResults=[];
      Search.get({ text: $scope.searchInput}).then(function(search) {
        $scope.searchResults = search;
        console.log($scope.searchResults);
      });

      //getAll($scope.searchInput);


      //$.ajax({
      //  url: "http://52.0.176.173:9292/occupation/" + $scope.searchInput,
      //  cache: false,
      //  success: function(data){
      //    console.log(JSON.stringify(data));
      //    $scope.data = data;
      //    $scope.$apply();
      //  }
      //});




    }
  });
