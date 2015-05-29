angular.module('myApp',[])
    .controller('FriendsController',
    //filter that takes an array of items and returns a sub-array based on a filtering condition
            function($scope, $filter) {
            $scope.friends = [{
                    name: 'Srirama murthy',
                    phone: '9848011641',
                    country: 'IN'
                }, {
                    name: 'John',
                    phone: '8647323423',
                    country: 'US'
                }, {
                    name: 'Alex',
                    phone: '5453562353',
                    country: 'NZ'
                }, {
                     name: 'Martin',
                     phone: '2376454323',
                     country: 'US'
                }, {
                   name: 'Ian',
                   phone: '8645432364',
                    country: 'AU'
                }, {
                  name: 'Rob',
                phone: '8967654567',
                country: 'UK'
    }];//end of json
 });





angular.module('myApp.filters')
    .filter('wordcount', function () {
    return function(input){
        return input===undefined ? 0 : input.split(/\s/g).length;
    }
    });
//  usage : <span>{{post.content | wordcount}} words</span> <br/>