    
var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scope) {
    $scope.myData =
        [{ name: "Murthy", age: 50 },
        {name: "Tarun", age: 43},
        {name: "Kiran", age: 27},
        {name: "Rama", age: 29},
        {name: "Kirthi", age: 34}];

    $scope.gridOptions = {
        data: 'myData',
        enableRowSelection: true,
        enableCellEditOnFocus: true,
        showSelectionCheckbox: true,
        selectedItems: $scope.selectedRows
    }; 
});

/*
$scope.gridOptions = {
            data: 'myData',
            enableRowSelection: true,
            enableCellEditOnFocus: true,
            showSelectionCheckbox: true,
            selectedItems:$scope.selectedRows,
            columnDefs: [{
                field: 'ID',
                displayName: 'Id',
                enableCellEdit: false
            }, {
                field: 'First_Name',
                displayName: 'First Name',
                enableCellEdit: true
            }, {
                field: 'Last_Name',
                displayName: 'Last Name',
                enableCellEdit: true
            }]
        };

*/

