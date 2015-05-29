describe('Controller Test\n', function () {

    beforeEach(module("myApp"));
   

    it('Should contain model  as murthy',
    inject(function($rootScope,$controller) {
        var $scope = $rootScope.$new();

        $controller('simpleController', { $scope: $scope });

        expect($scope.name).toBe("murthy");
    }));
});