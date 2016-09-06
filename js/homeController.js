tweetApp.controller('homeController', function($scope, $http, $location, $routeParams, $mdDialog, $mdMedia, myFactory){
	$scope.homePage = true;
	$scope.$watch(function(){
		return $location.path();
	}, function(newPath){
		$scope.trump = '';
		$scope.clinton = '';
		$scope.home = '';
		$scope.search = '';
		console.log("the path changed it\'s now " + newPath);
		if(newPath == '/trump'){
			$scope.trump = 'active';
		}else if(newPath == '/clinton'){
			$scope.clinton = 'active';
		}else if (newPath == '/'){
			$scope.home = 'active';
		}else if(newPath != '/((trump)|(clinton))'){
			$scope.search = 'active';
		}
	})
	// $scope.isActive = function(view){
	// 	console.log($location.path);
	// 	return (view === $location.path);
	//}
	$scope.status = '  ';
	$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
	$scope.showPrompt = function(ev) {
	    // Appending dialog to document.body to cover sidenav in docs app
	    var confirm = $mdDialog.prompt()
	      .title('What tweets would you like to search for')
	      .textContent("Examples are 'number', 'rio', 'camping'.")
	      .placeholder('Dog name')
	      .ariaLabel('Dog name')
	      .targetEvent(ev)
	      .ok("Let's search!")
	      .cancel('No thanks');
	    console.log($mdDialog.prompt);
	    $mdDialog.show(confirm).then(function(result) {
	      $scope.status = 'You decided to search for ' + result + ' tweets.';
	      $location.path(result);
	      console.log($routeParams.searchTerm);
	    }, function() {
	      $scope.status = 'You didn\'t choose what tweets to search for.';
	    });
	  };
})