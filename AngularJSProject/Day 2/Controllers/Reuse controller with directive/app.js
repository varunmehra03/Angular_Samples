var app = angular.module('twitterApp', []);
app.controller('tweetsCtrl', function ($scope) {
    $scope.loadMoreTweets = function () {
        alert("loading tweets")
    }
    $scope.deleteTweets = function () {
        alert("deleting tweets");
    }
});
// Reusability of directive 
app.directive('enter', function () {
    return function ($scope, $element, $attrs) {
        
        $element.bind('click', function () {           
            // $scope.loadMoreTweets();//bad approach 
           // best approach
            $scope.$apply($attrs.enter);   
        })
    }
})