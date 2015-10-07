angular.module('myAppToTest').directive('timerWC', ['$interval', 'dateFilter', function($interval, dateFilter) {
	return {
		controller: function($scope, $element) {
			var timetoutId;
			
			$scope.$watch($scope.format, function(value) {
				$scope.format = angular.isDefined(value)?value:'MMMM dd, yyyy hh:mm:ss a';
				$element.text(dateFilter(new Date(), $scope.format));
			});

			timeoutId = $interval(function() {
				$element.text(dateFilter(new Date(), $scope.format));
			}, 1000);
		},
		scope: {
			format: '='
		}
	};
}]);
