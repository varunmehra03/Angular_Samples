angular.module('myApp', [])
    .controller('Ctrl', function ($scope) {
     $scope.user = {
        id: 123,
        name: {
            first: 'Sri',
            last: 'Rama'
        },
        username: 'murthy',
        friendIds: [5, 13, 3, 1, 2, 8, 21],
        // properties prefixed with $$ will be excluded
        $$no_show: 'Hide me!'
    };
});