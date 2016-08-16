//initialize the app
var tweetApp = angular.module('tweetApp', ['ngRoute']);

tweetApp.directive('customMenu', function(){
	return{
		restrict: 'E', //E = element, A = attribute, C = class, m = comment
		templateUrl: "views/menu.html"
	}
});
tweetApp.config(function($routeProvider){
	//at home loap up same pae but new controller
	$routeProvider.when('/',{
		templateUrl: '../templates/home.html',
		controller: 'homeController'
	});
	//at trump loap up same page but new controller
	$routeProvider.when('/trump',{
		templateUrl: '../templates/trump.html',
		controller: 'trumpController'
	});
	//at hillary loap up same page but new controller
	$routeProvider.when('/clinton',{
		templateUrl: '../templates/clinton.html',
		controller: 'clintonController'
	});
	// $routeProvider.otherwise('#/'); //default 
});