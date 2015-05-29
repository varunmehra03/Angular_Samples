angular.module('myApp', [])
.controller('Ctrl', function ($scope) {
    $scope.mydata = 'Welcome to Manual bootstrapping process of Angular JS';
});

angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});