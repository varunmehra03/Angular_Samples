var app = angular.module('App', []);
app.controller('empCtrl', function ($scope, $filter) {
    
    $scope.employees= [
        {
            name: 'Murthy',
            skills: ['Dotnet', 'Ext js', 'node js', 'angular js'],
            exp:12
        },
        {
            name: 'Rama',
            skills: ['Java', 'can js', 'node js', 'backbone js'],
            exp: 18
        },
        {
            name: 'Mallika',
            skills: ['Dotnet', 'require js', 'ember js', 'angular js'],
            exp: 20
        },
        {
            name: 'Ramana',
            skills: ['java', 'C++', 'node js'],
            exp: 5
        },
        {
            name: 'Kavitha',
            skills: ['Dotnet', 'Ext js', 'node js', 'angular js'],
            exp: 13
        }, {
            name: 'Kirthi',
            skills: ['C++', 'oracle'],
            exp: 17
        }
    ]


    // we can use $filter service in controller also like this
    $scope.name = "murthy";
    console.log($filter('uppercase')($scope.name));    
})

// simple custom  filter to return substring from given string
app.filter('charLimit', function () {
    return function (input, length) {
        if (!length)
            length = 10; //min. length to show from given string

        if (!input) 
            return '';        

        if (input.length <= length) 
             return input;
        else
            return input.substring(0,length)+'........'        
    }       
})

// custom filter
app.filter('canJoinInProject', function () {
    return function (data, experience) {
        var filtered = [];
        if (!experience)
            exp = 5;

        for (var i = 0; i < data.length;i++){
            var value=data[i];

            if(value.exp<experience){
                filtered.push(value);
            }
        }
        return filtered;
    }
    })