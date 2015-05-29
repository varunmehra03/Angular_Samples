'use strict';

// Declare app level module which depends on filters, and services
/* Controllers */
angular.module('myApp', ['myApp.directives'])
    .controller("checkController", function ($scope) {
    $scope.pw1 = 'password';
});

/* Directives */
angular.module('myApp.directives', [])
    .directive('pwCheck', [function () {
        return {
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {

                var me = attrs.ngModel;
                var matchTo = attrs.pwCheck;

                scope.$watch('[me, matchTo]', function (value) {
                    ctrl.$setValidity('pwmatch', scope[me] === scope[matchTo]);
                });

            }
        }
    }]);