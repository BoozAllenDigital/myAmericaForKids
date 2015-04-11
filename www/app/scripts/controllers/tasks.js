'use strict';

angular.module('oNetApp').controller('TasksCtrl', function ($routeParams, $scope, Tasks, TaskRatings) {
	Tasks.query({ id: $routeParams.id}, function(data) {
    var coreTasks = [];
    var supplementalTasks = [];
    data.forEach(function(task) {
      if (task['Task Type'] == "Core") {
        coreTasks.push(task);
      } else {
        supplementalTasks.push(task);
      }
    });

    $scope.coreTasks = coreTasks;
    $scope.supplementalTasks = supplementalTasks;
  });

  $scope.updateRating = function updateRating(soc, taskId, userId, rating, task) {
    task.rated = true;
    task.rating = rating;
    var rand = Math.random()* 1000;
    rand = Math.ceil(rand * 10) / 10;
    console.log(rand);
    console.log(soc);
    var task = {
      'O*NET-SOC Code': soc,
      'task_id': taskId,
      'user_id': 1,
      'rating': rating
    };

    console.log(JSON.stringify(task));
    TaskRatings.save(task, function(task) {
      console.log(task);
    });
  }
});
