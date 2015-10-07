angular.module('myAppToTest').directive('food', function() {
	return {
		restrict: 'E',
		scope: {
			food: '=',
			remove: '&remove'
		},
		templateUrl: 'javascript/app/templates/food.html',
		controller: 'markets'
	}
});
