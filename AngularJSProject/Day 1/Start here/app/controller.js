angular.module('myApp.controllers', [])
 .controller('FinanceController', function ($scope) { // constructor function
      // property
    $scope.salary = 0;
    $scope.percentage = 0;

      //method
    $scope.result = function() {
        return $scope.salary * $scope.percentage * 0.01;
    };
});