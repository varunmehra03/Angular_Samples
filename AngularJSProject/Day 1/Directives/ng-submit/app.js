angular.module('nameApp', [])
.controller('NameCtrl', function ($scope) {
    $scope.names = ['Murthy', 'Rama', 'Mallika'];

    $scope.addName = function () {
        $scope.names.push($scope.newName);
        $scope.newName = '';
    };

    $scope.removeName = function (name) {
        var i = $scope.names.indexOf(name);
        $scope.names.splice(i, 1);
    };
});