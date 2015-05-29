angular.module('myApp', []);

angular.module('myApp',[])
    .directive('outerDirective', function() {
    return {
        scope: {},
        restrict: 'AE',
        // parent controller
        controller: function ($scope, $compile, $http) { // you can inject dependencies here

            // $scope is the proper scope for the directive
            this.addChild = function(nestedDirectiveScope) { // refers to the controller
                console.log('Got the message from nested directive:' + nestedDirectiveScope.message);

                //This code attaches a controller named outerDirective to the directive. When another
                //directive wants to communicate, it needs to declare that it requires this directive's
                //controller instance.
            };
        }
    };
    });

angular.module('myApp',[])
    .directive('innerDirective', function() {
    return {
        scope: {},
        restrict: 'AE',

        //require: '^outerDirective' tells AngularJS to search for the controller on the     element and its parent

        require: '^outerDirective', //We need the outerDirective  controller
            link: function(scope, elem, attrs, controllerInstance) {
                //the fourth argument is the controller instance you require
                scope.message = "Hi, Parent directive";
                controllerInstance.addChild(scope);
            }
      };
});