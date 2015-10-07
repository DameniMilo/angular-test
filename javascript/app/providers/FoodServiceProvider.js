angular.module('myAppToTest').provider('foodService', function foodServiceProvider() {
	var isSpicy = false;

	this.setIsSpicy = function(value) {
		isSpicy = value;
	};

	this.$get = [function foodServiceFactory() {
		return new FoodService(isSpicy);
	}];
});
