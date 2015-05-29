angular.module('myApp', [])
.controller('Ctrl', function ($scope, MyValue) {
    $scope.data = MyValue;
    $scope.update = function () {
        MyValue.name = 'Sriram';
    };
})
.value('MyValue', {
    name: 'Corporate Trainer',
    experience: 24
});

// constants


//angular.module('myApp', [])
//.config(function (MyConstant) {
//    // can't inject $log into config()
//    console.log(MyConstant);
//})
//.controller('Ctrl', function ($scope, MyConstant) {
//    $scope.data = MyConstant;
//    $scope.update = function () {
//        MyConstant.name = 'sriram';
//    };
//})
//.constant('MyConstant', {
//    name: 'Sriram',
//    number: 15
//});
