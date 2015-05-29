//$scope.$emit() does the opposite of $scope.$broadcast().
//It will trigger all listeners of the event that exist within that same scope, or any of the parent
//scopes along the prototype chain, all the way up to $rootScope

angular.module('myApp', [])
.directive('myListener', function($log) {
    return {
        restrict: 'E',
        // each directive should be given its own scope
        scope: true, link: function (scope, el, attrs) {
            // method to generate event
            scope.sendUp = function () {
                scope.$emit('myEvent', { origin: attrs.local });
            };
            // method to listen for event
            scope.$on('myEvent', function (event, data) {
                $log.log(
                event.name +
                ' observed in ' +
                attrs.local +
                ', originated from ' +
                data.origin
                );
            });
        }
    };
});

// Registering event listener
angular.module('myApp', [])
.controller('Ctrl', function ($scope, $log) {
    $scope.setup = function () {
        $scope.teardown = $scope.$on('myEvent', function (event, data) {
            $log.log(event.name + ' observed with payload ', data);
        });
    };
});

//Invoking $scope.setup() will initialize the event binding, and invoking $scope.
//teardown() will destroy that binding.