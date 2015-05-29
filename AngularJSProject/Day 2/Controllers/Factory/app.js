var app = angular.module("myApp", []);

// factory allows us to create service and injects dynamically using Dependency Injection

// Factory creates single to UserService  which returns two functions
app.factory("$userService", function () {
  var users = ["Sri", "Rama", "Murthy"];// Service may return single object or array or JSON  collection etc

    // we can use $http service to make ajax call to server to retrive data as service
  return {
    all: function() {
      return users;
    },
    first: function() {
      return users[0];
    }
  };
});


//view - controller - serivce - ajax($promise) - Webapi  ($Scope- DI) - MVC 

// binding service to controller  and setting scope with DI
app.controller("myCtrl", function($scope, $userService) {
    $scope.users = $userService.all();

});

// same service can be reusable in different controller

app.controller("anotherCtrl", function($scope, $userService) {
    $scope.firstUser = $userService.first();

    // anotherCtrl.$inject = ["$scope", "UserService"]; // This also works
});