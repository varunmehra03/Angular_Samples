angular.module('myApp', [])
.controller('Ctrl', function($scope) {
    $scope.data =123;
    $scope.show = false;

    $scope.sdata = {val: 8388388};

});