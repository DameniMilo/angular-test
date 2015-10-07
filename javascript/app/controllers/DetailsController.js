angular.module('myAppToTest').controller('detailsController', ['$scope', '$routeParams', '$location', 'foodService', function($scope, $routeParams, $location, foodService) {
  $scope.params = $routeParams;
  $scope.fs = foodService;
}]);