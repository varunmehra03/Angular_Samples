var myApp = angular.module('myApp', []);
// Factory allows to create service that can be shared by more than one controller
myApp.factory("$DataService", function () {
    return { message: "I am data from service" }
})

// reusable filter for reusability and testability
myApp.filter("reverse", function () {
    return function (text) {       
        return text.split('').reverse().join('');
    }
})

myApp.controller('FirstCtrl', function ($scope, $DataService) {
    $scope.data = $DataService;
});

myApp.controller('SecondCtrl', function ($scope, $DataService) {
    $scope.data = $DataService;

    // filter function
    $scope.reversedMessage = function () {
        return $scope.data.message.split('').reverse().join('');
    }


})