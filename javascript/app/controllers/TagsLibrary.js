angular.module('myAppToTest').controller('tagsLibrary', ['$scope', function($scope) {
	$scope.tags = [{
		enabled: true,
		name: 'Tag 1'
	},
	{
		enabled: true,
		name: 'Tag 2'
	}];

	$scope.addTag = function() {
		console.log($scope.newTagName);
		console.log($scope.newTagEnabled);
		$scope.tags.push({ name: $scope.newTagName, enabled: $scope.newTagEnabled });
		delete $scope.newTagName;
		delete $scope.newTagEnabled;
	};

	$scope.removeTag = function(tag, index) {
		console.log(tag);
		console.log(index);
		$scope.tags.splice(index, 1);
	}
}]);
