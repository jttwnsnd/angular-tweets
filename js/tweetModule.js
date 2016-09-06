//initialize the app
var tweetApp = angular.module('tweetApp', ['ngRoute', 'ngMaterial', 'ngMessages']);

tweetApp.config(function($routeProvider){
	//stuff for my chips
	//at home loap up same page but new controller
	$routeProvider.when('/',{
		templateUrl: 'views/home.html',
		controller: 'homeController'
	});
	//at trump loap up same page but new controller
	$routeProvider.when('/:searchTerm',{
		templateUrl: 'views/tweets.html',
		controller: 'tweetController'
	});

	$routeProvider.when('/:searchTerm*',{
		templateUrl: 'views/tweets.html',
		controller: 'tweetController'
	});
// 	//at hillary loap up same page but new controller
// 	$routeProvider.when('/clinton',{
// 		templateUrl: '../templates/clinton.html',
// 		controller: 'clintonController'
// 	});
// 	// $routeProvider.otherwise('#/'); //default 
});
tweetApp.factory('myFactory', function(){
	var factory = {};

	factory.getVar = function(){
		return this.variable;
	}

	factory.setVar = function(data){
		this.variable = data;
	}
	return factory;
});