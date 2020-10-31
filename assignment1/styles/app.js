(function(){
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);

    function LunchCheckController($scope){
        $scope.list = "";
        $scope.splitList = "";
        $scope.messageText = "";
        
        $scope.message = function(){
            $scope.splitList = $scope.list.split(",");

            if($scope.list === ""){
                $scope.messageText = "Please enter data first";
                return $scope.messageText;                
            }
            else if($scope.splitList.length <= 3){
                $scope.messageText = "Enjoy!";
                return $scope.messageText;
            }else{
                $scope.messageText = "Too much!";
                return $scope.messageText;
            }
        }
    }
    LunchCheckController.$inject = ['$scope'];

})();