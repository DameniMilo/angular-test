angular.module('myAppToTest').controller('markets', ['$scope', 'foodService', function($scope, foodService) {
	$scope.marketsList = function(foodName) {
		return foodService.getMarketsWithFood(foodName);
	};
}]);
