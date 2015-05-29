var app = angular.module("MyApp", []);
app.directive("basket", function() {
  return {
    restrict: "E",
    controller: function($scope, $element, $attrs) {
      $scope.content = [];
      this.addApple = function() {
        $scope.content.push("apple");
      };
      this.addOrange = function() {
        $scope.content.push("orange");
      };
    },
    link: function(scope, element,attr) {
      element.bind("mouseenter", function() {
        alert(scope.content);
          element.css({ 'background-color': 'red' })
      });
    }
  };
});//end of basket directive

app.directive("apple", function() {
  return {
      require: "basket",
      // link parameters are (scope, element, attributes, controller
    link: function(scope, element, attrs, basketCtrl) {
      basketCtrl.addApple();
    }
  };
});

app.directive("orange", function() {
  return {
    require: "basket",
    link: function(scope, element, attrs, basketCtrl) {
      basketCtrl.addOrange();
    }
  };
});