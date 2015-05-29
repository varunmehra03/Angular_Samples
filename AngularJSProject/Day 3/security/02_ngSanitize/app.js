/*
The ng-bind-html directive resides in a separate module (ngSanitize), and
requires inclusion of an additional source file: angular-sanitize.js. You must
declare a dependency on the ngSanitize module if you plan to use the ng-bindhtml
directive
*/

angular.module('expressionsEscaping', ['ngSanitize'])
  .controller('ExpressionsEscapingCtrl', function ($scope, $sanitize) {
      $scope.msg = 'Hello, <b><i>World</i></b>!';

    $scope.safeMsg = $sanitize($scope.msg);      
  });

/*
  1.  ng-bind not processing - as it is markup will be shown
  2.  ng-bind-html : process as string marks up are show
  3.
*/

      
