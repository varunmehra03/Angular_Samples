//Directives will frequently load HTML templates from outside their definition. When using them
//in an application, you will need to understand how to properly manage them, how they interact
//with the directive's parent scope, and how they interact with the content nested
//inside them.

angular.module('myApp', [])
    .controller('MainCtrl', function ($scope) {

        $scope.overwrite = false;
        $scope.origin = 'parent controller';

    }).directive('myDirective',   function () {
        return {
             restrict: 'E',
            replace: true,
              templateUrl: 'my-directive.html',
                link: function (scope) {
                       scope.overwrite = !!scope.origin;
                       scope.origin = 'link function';
             }
        };
});