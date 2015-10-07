angular.module('myAppToTest').directive('timer', ['$interval', 'dateFilter', function($interval, dateFilter) {
	return {
		link: function(scope, element, attrs) {
			var format, timetoutId;

			scope.$watch(attrs.timer, function(value) {
				format = value;
				element.text(dateFilter(new Date(), format));
			});

			timeoutId = $interval(function() {
				element.text(dateFilter(new Date(), format));
			}, 1000);
		}
	};
}]);
