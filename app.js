(function (){
    'use strict';

    angular.module('DIApp',[])
    .controller('DIController',DIController);

        function DIController($scope, $filter){
            $scope.name = "Cristina";
            $scope.stateOfBeing = "plain";

        $scope.sayMessage = function(){
            return " likes to eat healthy snacks at night!"
        };

        $scope.feedName = function(){
            $scope.stateOfBeing = "color";
        }
        }
    

})();