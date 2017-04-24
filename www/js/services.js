angular.module('starter.services')
.factory('Tasks', function() {
	return {
		all: function() {
			var taskString = window.localStorage['tasks'];
			if(taskString) {
				return angular.fromJson(taskString);
			}
			return [];
		},
		save: function(task) {
			var tasks = [];
			var taskString = window.localStorage['tasks'];
			if(taskString) {
				tasks = angular.fromJson(taskString);
			}
			tasks.push(task);
			window.localStorage['tasks'] = angular.toJson(tasks);
		},
		delete:function(task){
			var tasks = [];
			var taskString = window.localStorage['tasks'];
			if(taskString) {
				tasks = angular.fromJson(taskString);
			}
			 for(var i=0; i<tasks.length; i++) {
         if (tasks[i] != null && tasks[i].title == task.title && tasks[i].st == task.st) {
           tasks.splice(i, 1);
           break;
         }
       }
		  	window.localStorage['tasks'] = angular.toJson(tasks);
		  	return [];
		}
	}
})
