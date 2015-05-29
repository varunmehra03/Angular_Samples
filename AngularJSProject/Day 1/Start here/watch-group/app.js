//multiple model components need to be tied to the same $watch type
//callback. As of the 1.3 release, AngularJS provides the $watchGroup method that accepts a
//collection of watch targets in which all the watch targets need to bind to the same callback.

angular.module('myApp', [])
.controller('Ctrl', function($scope, $log) {
    $scope.name = 'Murthy';
    $scope.cader = {
        job: 'Engineer'
    };
    // watch ping and the ding.dong property by reference
    $scope.$watchGroup(['name', 'cader.job'],
            function (newVals, oldVals,scope) {
        // callback logic
        $log.log(newVals, oldVals, scope);
    });
});