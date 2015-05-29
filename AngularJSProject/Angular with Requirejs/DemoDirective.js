define([
   'text!demo/partials/DemoDirectiveTemplate.html'
], function (
  template
) {

    return [
      function () {
          return {
              restrict: 'A',
              scope: {
                  message: '='
              },
              template: template,
              link: function (scope, element, attrs) {

              }
          }
      }
    ];

});