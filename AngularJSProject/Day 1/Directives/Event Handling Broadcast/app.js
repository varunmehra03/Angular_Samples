//The $scope.$broadcast() method triggers the event in itself and all child scopes.

//but  since this action will still bubble down through the scope hierarchy to reach the listening child
// scopes, it is possible to introduce performance problems if this is overused.

angular.module('myApp', [])
.directive('myListener', function($log) {
    return {
        restrict: 'E',
         scope: true,
        link: function(scope, el, attrs) {
            // method to generate event
            scope.sendDown = function() {
                scope.$broadcast('myEvent', {origin: attrs.local});
            };
            // method to listen for event
            scope.$on('myEvent', function(event, data) {
                $log.log(
                event.name + ' observed in ' + attrs.local + ', originated from ' +data.origin);
            });
        }
    };
});