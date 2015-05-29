define([], function () {
    return [
      function () {

          var demoMessage = 'Hello from DemoFactory';
          var getDemoMessage = function () {
              return demoMessage
          }

          return {
              getDemoMessage: getDemoMessage
          }
      }
    ];

});