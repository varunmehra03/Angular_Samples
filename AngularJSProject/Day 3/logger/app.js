angular.module('myApp')
    .config(function($provide) {
        $provide.decorator('$log', function($delegate) { //$delegate is the original $log service.
            $delegate.postInfoToURI = function(message) {
             //send data to server. Maybe inject a service here which  interacts with the server
            $delegate.log('Data to post:' + message);
            $delegate.log('Sending data to server');
    }
        return $delegate; //this is the modified $log service
    });
    });

angular.module('myApp')
    .controller('TestController', function($scope, $log) {
        $scope.data='sample data';
        $log.postInfoToURI('Added some data to scope'); //call the newly added function
        });
