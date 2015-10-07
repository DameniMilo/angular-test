angular.module('myAppToTest').controller('myController', ['$scope', function($scope) {
	$scope.blablabla = 'Hello World!'; 
	$scope.size = 16;

	console.log($scope);
	$scope.$watch('blablabla', function(newValue, oldValue) {
		console.log('new value = ' + newValue);
		console.log('old value = ' + oldValue);
	});
	
	$scope.$watch('size', function(newValue, oldValue) {
		console.log('new value = ' + newValue);
		console.log('old value = ' + oldValue);
	});
}]);
