angular.module('test', []);

angular.module('test')
    .directive('outputText', function () {
    return {
        transclude: true, // to apply transclusion

        scope: {},// isolated scope

        template: '<h1 ng-transclude></h1> <img src="banana.png"/>'
    };
    });

/*
ng-transclude says where to put the transcluded content. In this case the DOM
content <p>Hello {{name}}</p> is extracted and put inside 
<h1 ng-transclude></h1>. The important point to remember is that the expression {{name}}
interpolates against the property defined in the parent scope rather than the isolated
scope.
*/

/*
angular.module('myApp', []).directive('transcludeDirective',function() {
    return {
        transclude: 'element',  // to apply tranclusion on element rather than on content
        scope: {},
        restrict: 'AE',
        replace: true,
        link: function(scope, elem, attrs, ctrl, transclude) {
            transclude(function(clone) { //'clone' is the clone of the directive element
                clone.css('background-color', 'yellow');
                elem.after(clone); //append the clone
            });
        },
        template: '<div ng-transclude></div>'
    }
});

<p transclude-directive>Hello World!</p>

*/