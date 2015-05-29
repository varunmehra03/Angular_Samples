﻿var myApp = angular.module('myApp', []);

myApp.factory('$geoService', ['$q', '$rootScope', function ($q, $rootScope) {
    return function () {
        this.changeLocation = function (coords) {
            $rootScope.$broadcast("locationChanged", {
                coordinates: coords
            });
        };
        var d = $q.defer();
        setTimeout(function () {
            try {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        function (position) {
                            $rootScope.$apply(function () {
                                var longitude = position.coords.longitude;
                                changeLocation(position.coords);
                                d.resolve({
                                    aField: 'Hello ' + position.coords.longitude + '!'
                                });
                            });
                        },
                        function (error) {
                            d.reject(error);
                        }
                    );
                }
                else {
                    d.reject('location services not allowed');
                }
            }
            catch (err) {
                d.reject(err);
            }
        }, 1000);
        return d.promise;
    };
}]);

myApp.controller('GeoController', function ($scope, $geoService) {
    $geoService();
 
    $scope.$on("locationChanged", function (event, parameters) {
        $scope.coords = parameters.coordinates;
    });
});