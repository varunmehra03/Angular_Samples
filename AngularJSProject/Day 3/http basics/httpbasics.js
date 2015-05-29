angular.module('httpbasics', [])

  .controller('HttpBasicsCtrl', function ($scope, $http) {

    $scope.getName = function () {
        // using get
      var futureResponse = $http.get('data.json'); // futureResponse is Promise 
      futureResponse.success(function (data, status, headers, config) {
        $scope.data = data;
      });
      futureResponse.error(function (data, status, headers, config) {
        throw new Error('Something went wrong...');
      });
    };

    
      // CORS : Cross-origin resource sharing 
  
    $scope.queryUsersGeneric = function () {

      $http({
        method:'GET',
        url:'https://api.mongolab.com/api/1/databases/ascrum/collections/users',
        params:{
          apiKey:'4fb51e55e4b02e56a67b0b66'
        }
      }).success(function (data, status, headers, config) {
          $scope.usersGeneric = data;
        }).error(function (data, status, headers, config) {
          throw new Error('Something went wrong...');
        });
    };

      //POST with CORS
    $scope.addUser = function (user) {

      var userToAdd = {
        name:'Murthy ',
        email:'Murthy@yahoo.com'
      };
        // Post
      $http.post('https://api.mongolab.com/api/1/databases/ascrum/collections/users',
        userToAdd, {
          params:{
            apiKey:'4fb51e55e4b02e56a67b0b66'
          }
        }).success(function (data, status, headers, config) {

          $scope.newUser = data;
        }).error(function (data, status, headers, config) {
          throw new Error('Something went wrong...');
        });
    };
  });