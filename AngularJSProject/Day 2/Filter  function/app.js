var app = angular.module("MyApp", []);
app.factory("$FriendsService", function () {
    var friends = [
    { name: "Sri", age: 20 },
    { name: "Murthy", age: 55 },
    { name: "Raju", age: 20 },
    { name: "Kiran", age: 37 },
    { name: "Mallika", age: 20 },
    { name: "Rama", age: 32 }
    ];

    return {
        all: function () {
            return friends;
        }
    }
})
app.controller("MyCtrl", function ($scope, $FriendsService) {
    $scope.friendsList = $FriendsService.all();

  $scope.filterFunction = function(element) {
    return element.name.match(/^Ma/) ? true : false;
  };
});