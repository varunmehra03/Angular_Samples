angular.module('myApp', [])
    .controller('Ctrl', function ($scope) {
        $scope.users = [
       {
           firstName: 'Sriram',
           lastName: 'Murthy',
           number: '12'
       },
       {
           firstName: 'Sharada',
           lastName: 'kishor',
           number: '23'
       },
       {
           firstName: 'Ravi',
           lastName: 'Teja',
           number: '12'
       },
       {
           firstName: 'Kavitha',
           lastName: 'Murthy',
           number: '23'
       },
       {
           firstName: 'Kamala',
           lastName: 'Naidu',
           number: '3'
       }
        ];
    }).filter('userSearch', function () {
    return function (users, search) {
        var matches = [];
        angular.forEach(users, function (user) {
            if (!angular.isDefined(users) ||
            !angular.isDefined(search)) {
                return false;
            }
            // initialize match conditions
            var nameMatch = false,
            numberMatch = false;
            if (angular.isDefined(search.name) &&
            search.name.length > 0) {
                // substring of first or last name will match
                if (angular.isDefined(user.firstName)) {
                    nameMatch = nameMatch ||
                    user.firstName.indexOf(search.name) > -1;
                }
                if (angular.isDefined(user.lastName)) {
                    nameMatch = nameMatch ||
                    user.lastName.indexOf(search.name) > -1;
                }
            }
            if (angular.isDefined(user.number) &&
            angular.isDefined(search.number)) {
                // only match if number is exact match
                numberMatch = user.number === search.number;
            }
            // either match should populate the results with user
            if (nameMatch || numberMatch) {
                matches.push(user);
            }
        });
        // this is the array that will be fed to the repeater
        return matches;
    };
});