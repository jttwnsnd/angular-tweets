//initialize the app
var tweetApp = angular.module('tweetApp', ['ngRoute']);

tweetApp.directive('tweetHello', function(){
	return{
		restrict: 'E', //e = element, a = attribute, c = class, m = comment
		template: "Hello Class!"
	}
});
tweetApp.directive('tweetAttr', function(){
	return{
		restrict: 'A', //E = element, A = attribute, C = class, m = comment
		template: "Hello class, from an attribute! {{test}}"
	}
});

tweetApp.directive('tweetClass', function(){
	return{
		restrict: 'C', //e = element, a = attribute, c = class, m = comment
		template: "Hello class, from another type of class!"
	}
});
tweetApp.directive('turnMeBlue', function(){
	return {
		link: function($scope, element, attrs){
			element.bind('mouseenter', function(){
				element.css('color', $scope.myColor);
				console.log(attrs);
			})
			element.bind('mouseleave', function(){
				element.css('color', 'black');
			})
		}
	}
});
