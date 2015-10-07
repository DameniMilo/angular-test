angular.module('myAppToTest', ['ngRoute']);

angular.module('myAppToTest').config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
	console.log($locationProvider);

	$routeProvider
	.when('/', {
    	templateUrl: 'javascript/app/templates/myController.html',
    	controller: 'myController'
	})
	.when('/tags-library', {
    	templateUrl: 'javascript/app/templates/tagsLibrary.html',
    	controller: 'tagsLibrary'
	})
	.when('/current-time-default-example', {
    	templateUrl: 'javascript/app/templates/timer.html',
    	controller: 'timerController'
	})
	.when('/current-time-modified', {
    	templateUrl: 'javascript/app/templates/timerWC.html',
	})
	.when('/food-main', {
    	templateUrl: 'javascript/app/templates/foodMain.html',
    	controller: 'foodMenu'
	})
	.when('/food-main/food-details/:foodName', {
    	templateUrl: 'javascript/app/templates/foodDetails.html',
    	controller: 'detailsController'
	})
	.when('/food-main/market-details/:marketName', {
    	templateUrl: 'javascript/app/templates/marketDetails.html',
    	controller: 'detailsController'
	}).otherwise({
        redirectTo: '/'
 	});
}]);

angular.module('myAppToTest').config(function(foodServiceProvider) {
	foodServiceProvider.setIsSpicy(false);
});

angular.module('myAppToTest').run(function(foodService){
	foodService.add('Ice cream');
	foodService.add('Bean');
	foodService.add('Water');
	foodService.add('Rice');
	foodService.add('Bread');
});
