angular.module('myApp', [])
    .directive('classDirective', function ($log) {
        return {
            restrict: 'C',
                template: '<p>A class directive</p>',
                link: function (scope, el, attrs) {

                    $log.log(el.html());
                    // <p>A class directive</p>

                        $log.log(el.hasClass('normal-class'));          // true

                        $log.log(attrs.classDirective);// cval

                            $log.log(attrs.someAttr); // myvalue
        }
    };
});