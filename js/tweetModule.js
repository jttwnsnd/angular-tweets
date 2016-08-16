//initialize the app
var tweetApp = angular.module('tweetApp', ['ngRoute']);


tweetApp.config(function($routeProvider){
	//at home loap up same page but new controller
	$routeProvider.when('/',{
		templateUrl: '../views/home.html',
		controller: 'tweetController'
	});
	//at trump loap up same page but new controller
	$routeProvider.when('/:searchTerm',{
		templateUrl: '../views/home.html',
		controller: 'tweetController'
	});
	$routeProvider.when('/:searchTerm*',{
		templateUrl: '../views/home.html',
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