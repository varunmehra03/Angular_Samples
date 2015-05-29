var app = angular.module("myApp", ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');   //#!/persons
      $routeProvider
          .when("/persons",
      {
          templateUrl: "partials/person_list.html"
      })
      .when("/persons/:id",
      {
          templateUrl: "partials/person_details.html",
          controller: "ShowController"
      })
           .when("/persons/:id/:age",
      {
          template: "<h1>Multiple parameters in routing</h1>",
          controller: "MultiController"
      })
          .otherwise( { redirectTo: "/persons" });
});



app.factory("PersonFactory", function() {
  var persons = [
    { name: "Sri", age: 25, id: 1 },
    { name: "Murthy", age: 35, id: 2 },
    { name: "Raju", age: 22, id: 3 },
    { name: "Srinivas", age: 25, id: 4 },
    { name: "Ramana ", age: 35, id: 5 },
    { name: "Rajive kumar", age: 22, id: 6 }
  ];
  return {
      all: function() {
          return persons;
      },
      get: function(id) {
          var result = null;
          angular.forEach(persons, function(p) {
              if (p.id == id)
                  result = p;
          });
          return result;
      }//end of get
  }; // end of return
});// end of Factory

app.controller("IndexController", function($scope, PersonFactory) {
  $scope.persons = PersonFactory.all();
});

app.controller("ShowController", function($scope, $routeParams, PersonFactory) {
  $scope.person = PersonFactory.get($routeParams.id);
});

app.controller("MultiController", function ($scope, $routeParams, PersonFactory) {
    alert($routeParams.id + " - "+ $routeParams.age)
});