function MyCtrl($scope) {
    $scope.value = "This is my controller";

     //controlled even contains functions
    //$scope.getName = function () {
    //    return $scope.name
    //    // ajax code write here
        
    //};
}

var WorldCtrl = function ($scope) {
    $scope.Analyser = function () { return "Murthy Info";}
    $scope.population = 7000;
    $scope.countries = [
    { name: 'France', population: 63.1 },
    { name: 'United Kingdom', population: 61.8 },
    ];

};

//// scope hierarchy
//$scope.worldsPercentage = function (countryPopulation) {
//    return (countryPopulation / $scope.population) * 100;
//}