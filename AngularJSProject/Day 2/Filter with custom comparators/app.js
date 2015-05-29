//you want a way to specify exactly what constitutes a match between the
//reference object and enumerable collection.

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
});