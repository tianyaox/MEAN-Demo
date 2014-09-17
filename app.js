var myModule = angular.module('flapperNews',[])
myModule.controller('MainCtrl',[
	'$scope',
	function($scope){
		$scope.test = "hello world!";
		$scope.posts = [
			{title:'post1', upvotes: 1},
			{title:'post2', upvotes: 15},
			{title:'post3', upvotes: 23},
			{title:'post4', upvotes: 9},
			{title:'post5', upvotes: 2}
		];
		$scope.addPost = function(){
			if ($scope.title === ''){
				return;
			}
			$scope.posts.push({title:$scope.title, link:$scope.link, upvotes:0});
			$scope.title = '';
			$scope.link = '';
		};
		$scope.upVote = function(post){
			post.upvotes++;
		}
}]);