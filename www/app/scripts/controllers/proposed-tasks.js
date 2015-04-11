'use strict';

angular.module('oNetApp').controller('ProposedTasksCtrl', function ($routeParams, $scope, ProposedTasks, TaskVotes, $modal) {


  $scope.showAddTaskModal = function() {
    var modalInstance = $modal.open({
      templateUrl: 'views/tasks/new.html',
      controller: 'TasksModalCtrl'
    });

    modalInstance.result.then(function(newTask) {
      $scope.proposedTasks.push(newTask);
    })
  }

  $scope.updateRating = function updateRating(task, rating){
    task.rating = rating;
  }

	ProposedTasks.query({ id: $routeParams.id}, function(data) {
		data.forEach(function(task) {
			task.rating = 2;
		});
		$scope.proposedTasks = data;
  });

  $scope.voteUp = function voteUp(taskId){
    console.log('here'+taskId);
    var vote = {
      'proposed_task_id' : taskId,
      'user_id' : 1,
      'vote' : '1'
    }
    TaskVotes.save(vote, function(vote) {
      console.log(vote);
    });
  };
  $scope.voteDown = function voteDown(taskId){
    console.log('or here'+taskId);
    var vote = {
      'proposed_task_id' : taskId,
      'user_id' : 1,
      'vote' : '-1'
    }
    TaskVotes.vote(vote, function(vote) {
      console.log(vote);
    })
  };
});

angular.module('oNetApp').controller('TasksModalCtrl', function($scope, $modalInstance, $routeParams,
  Occupation, ProposedTasks) {

  $scope.task = {};


  Occupation.get({id: $routeParams.id}, function(currentOccupation) {
    $scope.occupation = currentOccupation[0];
    $scope.task['O*NET-SOC Code'] = $scope.occupation['O*NET-SOC Code'];
    $scope.task['user_id'] = "1";
  });

  $scope.addTask = function() {
    console.log($scope.task);
    ProposedTasks.create({id: $scope.occupation['O*NET-SOC Code']}, $scope.task, function(newTask) {
      $modalInstance.close(newTask);
    });
  }

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  }
});
