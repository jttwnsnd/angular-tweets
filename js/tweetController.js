tweetApp.controller('tweetController', function($scope, $http, $location, $routeParams, $mdDialog, $mdMedia, myFactory){
	console.log($scope);

	$scope.userSearch = function(){
		console.log('hi');
	}
	// console.log($routeParams);
	if($routeParams.searchTerm){
		var searchTerm = $routeParams.searchTerm;
	}else{
		console.log($routeParams.searchTerm);
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
			recentSearch.unshift(searchTerm);
			if(recentSearch.length > 5){
				var howMany = recentSearch.length - 4;
				recentSearch.splice(recentSearch.length - 1, howMany);			
			}
		},function failureFunction(tweetData){
		}
	)
	
	$scope.removeItem = function(index){
		recentSearch.splice(index, 1);
	}
})