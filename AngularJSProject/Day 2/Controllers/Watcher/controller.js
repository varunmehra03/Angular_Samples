angular.module('myApp.controllers',[])
    .controller('SiteController', function($scope){
        $scope.publisher='SitePoint';
         $scope.type="Web Development";
        $scope.name="Scope for SiteController";
    });

angular.module('myApp.controllers')
    .controller('BookController', function($scope){
        $scope.books = ['Pro HTML 5','Jump Start CSS','Jump Start Responsive Web Design'];
        $scope.name = "Scope for BookController";

        // for watcher
        $scope.addToWishList = function (book) {
            $scope.wishListCount++;
        };

       

        $scope.wishListCount=0;
        $scope.$watch('wishListCount',function(newValue,oldValue){
            console.log('called '+newValue+' times');
            if(newValue==2){
                alert('Great! You have 2 items in your wish list. Time to buy what you love. ');
            }
        });
    });

//Unbinding Watcher
//var unbindWatcher=$scope.$watch('wishListCount',function
// (newValue,oldValue){
//    console.log('called '+newValue+' times');
//    if(newValue==2){
//        alert('Great! You have 2 items in your wish list. Time to buy what you love. ');
//    unbindWatcher();
//    }
//});

//$watchCollection 
//whenever a new item is added to the array or an existing one is removed, updated,or reordered
//$scope.$watchCollection('myCollection', function (newCollection, oldCollection) {
//    //handle the change
//    console.log(newCollection); //print new collection
//});

