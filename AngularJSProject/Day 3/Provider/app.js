
angular.module('myApp',[])
    .config(function ($greetProvider) { //get the  provider injected
        // observe , our provider name was greet but at the time of configuring we have to say greetProvider
          $greetProvider.setGreeting('Hola'); //configure our provider
});
