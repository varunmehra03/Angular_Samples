
// A = attribute  , E = element   C= class  , M =comment
// <div superman></div>      - Attribute
// <superman>      element
// <div class=superman></div>    - Class
//<!-- directive.superman-->       -  Comment

var app = angular.module("MyApp", []);
app.directive('superman', function () {
    return {
        restrict: 'AE',
        template: "<div>I am superman </div>"
    }
})
//   <div my-widget="Hello Murthy"></div>
app.directive("myWidget", function() {
  var linkFunction = function(scope, element, attributes) {
      scope.text = attributes["myWidget"];
  };   
  return {
    restrict: "A",
    template: "<p>{{text}}</p>",
    link: linkFunction,
    scope: {}
  };
});




app.directive("myWidget", function() {
  return {
    restrict: "E",
    template: "<p>{{text}}</p>",
    scope: {
      text: "@text" 
    }
  };
});

