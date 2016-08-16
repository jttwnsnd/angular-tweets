tweetApp.controller('tweetController', function($scope, $http, $location, $routeParams, myFactory){
	console.log($scope);

	$scope.userSearch = function(){
		console.log('hi');
	}
	// console.log($routeParams);

	if($routeParams.searchTerm){
		var searchTerm = $routeParams.searchTerm;
	}else{
		var searchTerm = 'trump';
	}
	$scope.searching = searchTerm;
	$scope.lookup = recentSearch;
	$http({
		method: 'GET',
		url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=' + searchTerm
	}).then(
		function successFunction(tweetData){
			$scope.tweets = tweetData.data.statuses;
			console.log(tweetData);
		},function failureFunction(tweetData){
			console.log(tweetData);
		}
	)
	$scope.userSearch = function(){
		if($scope.userInput){
			var searchTerm = $scope.userInput;
		}else{
			if($routeParams.searchTerm){
				var searchTerm = $routeParams.searchTerm;
			}else{
				var searchTerm = 'trump';
			}
		}
		$scope.searching = searchTerm;
		$http({
		method: 'GET',
		url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=' + searchTerm
	}).then(
		function successFunction(tweetData){
			$scope.tweets = tweetData.data.statuses;
			recentSearch.unshift(searchTerm);
			console.log(tweetData);
		},function failureFunction(tweetData){
			console.log(tweetData);
			}
		)
	}
	$scope.removeItem = function(index){
		recentSearch.splice(index, 1);
	}
})