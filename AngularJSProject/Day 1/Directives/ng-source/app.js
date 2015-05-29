angular.module("myApp", [])
.controller("todosController", function ($scope) {
    $scope.todos = [
    { action: "Get groceries", complete: false },
    { action: "Call plumber", complete: false },
    { action: "Buy running shoes", complete: true },
    { action: "Buy flowers", complete: false },
    { action: "Call family", complete: false },      
    { action: "Buy running shoes", complete: true }];

    $scope.viewFile = function () {
        return $scope.showList ? "list.html" : "table.html";
    };

    $scope.reportChange = function () {
        alert("Displayed content: " + $scope.viewFile());
    }
});