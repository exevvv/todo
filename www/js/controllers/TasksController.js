angular.module('starter.controllers')
.controller('TasksController', function ($rootScope, $scope, Tasks) {
	$scope.tasks = Tasks.all();

	$scope.complete = function(task){
  		if(task == null);
	    else {
        var tmp = task;
        Tasks.delete(task);
        tmp.st = "text-decoration:line-through";
        Tasks.save(tmp);
        $scope.tasks = Tasks.all();
      }
  	};

});
