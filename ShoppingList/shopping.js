(function(){
'use strict';

var shoppinglist1=[];

angular.module('shoppingList',[])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];
    function ShoppingListController($scope){
        $scope.shoppinglist1 = shoppinglist1;
    
    $scope.addToList= function(){
        var newItem = $scope.newItemName;

        $scope.shoppinglist1.push(newItem);
    };
}


})();