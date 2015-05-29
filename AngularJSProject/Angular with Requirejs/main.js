require.config({

    // Define paths
    paths: {
        'domReady': '../bower_components/requirejs-domready/domReady',
        'angular': '../bower_components/angular/angular'
    },

    // Shim those pesky non-AMD libraries
    shim: {
        'angular': {
            exports: 'angular'
        }
    },

    deps: ['./boot']

});