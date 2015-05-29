// Module dependency is pascalprecht.translate
var app = angular.module('myApp', ['pascalprecht.translate']);

    //configure the $translate service 
//.config(function ($translateProvider) {
//    //The $translateProvider knows one language, 
//    // as we set it with the $translateProvider.translations() 

//    // English language
//    $translateProvider.translations('en', {
//        HEADLINE: 'Hello there, This is my awesome app!',
//        INTRO_TEXT: 'And it has i18n support!'
//    });
//});

app.config(function ($translateProvider)
{
    $translateProvider.translations('en',
      {
          HEADLINE: 'Hello there, This is my awesome app!',
          INTRO_TEXT: 'And it has i18n support!'

          //German
      }).translations('de', {
          HEADLINE: 'Hey, das ist meine großartige App!',
          INTRO_TEXT: 'Und sie untersützt mehrere Sprachen!'
      });


    //The preferredLanguage() method tells angular-translate 
    //which of the registered languages is the one that our app should use,

    // set preffered lanauge
    $translateProvider.preferredLanguage('en');

    /*
If we don’t want to set the preferred language explicitly,
because it should be evaluated depending on a user settings or so,
we can use $translateProvider.determinePreferredLanguage().

The determinePreferredLanguage() method tries to determine the 
preferred language on its own by accessing browser properties
*/

    $translateProvider.determinePreferredLanguage(function () 
    { // define a function to determine the language // and return a language key 
    });

   // the use() method returns the currently used language in the getter form:
    
    
  //  $translate.use();
    // Returns the currently used language key $translate.use('en');
    // Sets the active language to `en` 


});


app.config(function($translateProvider) { 
    $translateProvider.translations('en', 
        { HEADLINE: 'Hello there, This is my awesome app!',
        INTRO_TEXT: 'And it has i18n support!',
        BUTTON_TEXT_EN: 'english',
        BUTTON_TEXT_DE: 'german'
        })

        .translations('de', 
        { HEADLINE: 'Hey, das ist meine großartige App!',
        INTRO_TEXT: 'Und sie untersützt mehrere Sprachen!',
        BUTTON_TEXT_EN: 'englisch', BUTTON_TEXT_DE: 'deutsch'
        });

    $translateProvider.preferredLanguage('en');
});


/*
To add a language, we have to make $translateProvider aware of a translation table,
which is a JSON object containing our messages (keys) that are to be translated into (values).
Using a translation table enables us to write our translations as simple JSON for loading
remotely or setting at compile-time, such as:	{ 'MESSAGE': 'Hello world', } 

In a translation table, the key represents a translation id, 
whereas the value represents the concrete translation for a certain language.

The $translateProvider knows one language, 
as we set it with the $translateProvider.translations() 
*/


//Next,
//we’ll implement a function on a controller that uses the $translate service and its use() 
//method to change the language at runtime. 
//We’ll need to inject the $translate service in our app’s 
//controller and add a function on its $scope:

app.controller('TranslateController', function ($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };

    $translateProvider.useStaticFilesLoader({ prefix: '/languages/', suffix: '.json' });
    /*
    angular-translate will attempt to load the enUS language from /languages/enUS.json.
    Using the StaticFilesLoader like so gives us the side benefit of lazy-loading. 
    the $translate service will only pull down the language files it needs at runtime.

    */

});

/*
Next  reflect this change in the HTML template by adding a button for each language.
We’ll also have to set up an ng-click directive on each button, 
which calls the function that changes the language at runtime:
*/


/*
prefix (string)
The prefix specifies the file prefix (including file paths)
suffix (string)
The suffix specifies the file suffix (usually the extension)
The file loader attempts to fetch files at the following URL path: [prefix]/[langKey]/[suffix]. 
*/