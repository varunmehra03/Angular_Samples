var myApp = angular.module('myApp', []); 
// Factory allows to create service that can be shared by more than one controller
myApp.factory("$DataService", function () {
    return {message:"I am data from service"}
})
myApp.controller('FirstCtrl', function ($scope, $DataService) {
    $scope.data = $DataService;
});

myApp.controller('SecondCtrl', function ($scope, $DataService) {
    $scope.data = $DataService;

     $scope.reversedMessage = function () {
        return $scope.data.message.split('').reverse().join('');
    }       
})

