angular.module('myApp', []);
angular.module('myApp')
    .factory('weatherService', function ($http) {
    return {
        getWeather: function (city, country) {

            var query = city + ',' + country;

      return $http.get('http://api.openweathermap.org/data/2.5/weather', {
             params: { q: query }  //?q=cityName,countryName
      }).then(function (response) {
          alert(response);
          //then() returns a promise which  is resolved with return value of success callback
          //alert(response.data.weather[0].description);
          return response.data.weather[0].description; ///extractweather data
         });
    }// end of getWeather
 }  // end of return
}); // end of  module