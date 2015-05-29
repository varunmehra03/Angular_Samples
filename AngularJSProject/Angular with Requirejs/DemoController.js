define([], function ( ) {

    return [
      '$scope', 'DemoFactory',
      function (
        $scope, DemoFactory
      ) {
          $scope.demoMessage = DemoFactory.getDemoMessage();
      }
    ];
});