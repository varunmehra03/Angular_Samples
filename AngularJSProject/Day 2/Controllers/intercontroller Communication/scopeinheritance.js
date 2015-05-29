var myApp = angular.module('myApp', []);

myApp.controller('FirstCtrl',function($scope){
    $scope.message1 = 'I am  data from First Controller';
})

myApp.controller('SecondCtrl', function ($scope) {
    $scope.message2 = 'I am  data from second Controller';
})