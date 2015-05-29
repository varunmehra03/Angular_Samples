var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })

        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function ($scope) {
                $scope.accounttypes = ['Savings Account', 'Current Account', 'Fixed Deposits'];
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: '<h3>You can make transactions now.</h3>'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'partial-about.html' },
                'columnOne@about': { template: '<h2 >Look I am a column!</h2>' },
                'columnTwo@about': {
                    templateUrl: 'table-data.html',
                    controller: 'CustomerController'
                }
            }

        });

});

routerApp.controller('CustomerController', function ($scope,$state) {

    $scope.message = 'Testing Features with UI-router';

    $scope.customers = [
        {
            name: 'Murthy',
            balance: 50000
        },
        {
            name: 'Raju',
            balance: 100000
        },
        {
            name: 'Rama sri',
            balance: 20000
        }
    ];

    $scope.gotoHomepage = function () {
        //if($scope.isSessionNotExpired)
           $state.go('home');
    }

});
