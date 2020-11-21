(function(){
    'use strict';

    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    //ToBuyController controller
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var itemToBuy = this;

        itemToBuy.itemName="";
        itemToBuy.quantity="";

        itemToBuy.addItem = function(){
            ShoppingListCheckOffService.addItem(itemToBuy.itemName, itemToBuy.quantity);
        }
    }

    //AlreadyBoughtController controller
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var AlreadyBought = this;

        AlreadyBought.items = ShoppingListCheckOffService.getItems();
    }


    //service
    function ShoppingListCheckOffService(){
        var service = this;

        var items= [];

        service.addItem = funcion (itemName,quantity){
            var item= {
                name: itemName,
                quantity: quantity
            };
            items.push(item);
        };

        service.getItems = function(){
            return items;
        };
    }

})();
