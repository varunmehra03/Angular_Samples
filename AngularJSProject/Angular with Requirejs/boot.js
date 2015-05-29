// to kick start your app
//bootstrap the Angular application to the html node of your index file.

define(['require','angular',  'app'], function ( require, angular, app ) {
    'use strict';

    require(['domReady!'], function (document) {
        angular.bootstrap(document, ['app']);
    });

});