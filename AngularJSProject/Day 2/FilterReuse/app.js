angular.module('elementApp', [])
  .controller('tableCtrl', function ($scope, $filter) {

      console.log($filter('uppercase')('welcome to filters'));

      $scope.elements = [
          { name: 'Helium', symbol: 'he', atomicnumber: 2 },
          { name: 'Silver', symbol: 'ag', atomicnumber: 47},
          { name: 'Iron', symbol: 'fe', atomicnumber: 26 }
      ]
  })
.filter('lowercaseFirst', function () {
    // makes first character of string to lowercase
    return function (data) {
        temp = data.split('');
        temp.splice(0, 1, data[0].toLowerCase());
        return temp.join('');
    }
})
.filter('uppercaseLast', function () {
    // makes last character to uppercase
    return function (data) {
        temp = data.split('');
        temp.splice(temp.length - 1, 1, data[temp.length - 1].toUpperCase());
        return temp.join('');
    }
})
.filter('combindFilter',function($filter){
    return function (data) {
        var firstchange = $filter('lowercaseFirst')(data);
        return $filter('uppercaseLast')(firstchange);
    }
})

