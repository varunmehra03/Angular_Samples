angular.module('myApp', []);
angular.module('myApp')
    .controller('MainController', function ($scope) {
    $scope.message = 'I prefer AngularJS';
    });
angular.module('myApp').directive('helloWorld', function() {
    return {
        restrict: 'AEC',
        replace: true,
        template:
         '<p ng-click="clearMessage()">Hello, Angular JS {{message}} </p>',
        link: function (scope, elem, attrs) {
             scope.$watch('message', function(value) {
             console.log('Message Changed!  '+value);
            });   
             scope.clearMessage = function() {
             scope.message = '';
             }
             elem.bind('mouseover', function () {
                 elem.css('cursor', 'pointer');
             }); 
        } // end of link function
    } // end of return 
});
/*

What we want to do?

Let's allow our users to enter a message, and our directive should display that
message alongside our Hello, World! string.

2. Our directive should also be able to watch when the message changes.

3. When somebody clicks on the template produced by the directive, the message
should be set to "empty".

*/
