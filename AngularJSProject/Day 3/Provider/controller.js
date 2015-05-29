angular.module('myApp')
    .controller('TestController', function ($greet) {
        $greet('Srirama Murthy'); // use the greet service
});