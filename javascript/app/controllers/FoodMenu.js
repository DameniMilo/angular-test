angular.module('myAppToTest').controller('foodMenu', ['$scope', 'foodService', function($scope, foodService) {
	$scope.foods = foodService.getFoods();

	$scope.addFood = function() {
		foodService.add($scope.newFoodName);
		delete $scope.newFoodName;
	};

	$scope.removeFood = function(index) {
		foodService.remove(index);
	};
}]);
