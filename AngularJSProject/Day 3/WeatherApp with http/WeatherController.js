angular.module('myApp')
    .controller('WeatherController',
         function($scope, weatherService) {
             $scope.getWeather = function() {
                 $scope.weatherDescription = "Fetching . . .";

                 weatherService.getWeather($scope.city, $scope.country)
                     .then(function (data) {
                        // alert(data);
                                $scope.weatherDescription = data;
                             },
                     function () {
                            $scope.weatherDescription = "Could not obtain data";
                    });
          }
});