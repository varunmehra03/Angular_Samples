﻿angular.module('myApp', []);
angular.module('myApp')
    .controller('UserController',function($scope) {
        $scope.user = {};        

    $scope.countries = [{
        id: 'US',
        desc: 'United States'
    }, {
        id: 'GB',
        desc: 'United Kingdom'
    }, {
        id: 'AU',
        desc: 'Australia'
    }];
});
