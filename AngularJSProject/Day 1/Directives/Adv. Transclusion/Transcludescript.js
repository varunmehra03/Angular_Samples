var d=angular.module('trascludemovie',['ngRoute']);
d.directive('movieInfo', function () {

    return {
        transclude:true,
        scope:{
            // the '=' is to set up 2-way binding betweeen 
            // the local scope property  and the parent scope
            // property of name defined via the value
            // of attr attribute

            //   'name':'@movieInfo'  means give me the value of MovieInfo assigned via attribute in p
            'name': '=movieinfo'
        },
       

        // the {{name}} is used from the local scope defined below
        // it does not collide with the {{name}} on the page
        //which is in the parent scope
        template:'<div>'+
             '<h3> {{name}} </h3>'+
         // '<input ng-model="name" class="twoWayBinding"/><br/>'+
          '<img ng-src="{{name}}.jpg" alt="I am image">' +'<img src="angel.jpg">'+
             '<div ng-transclude></div>  </div>'

}

});