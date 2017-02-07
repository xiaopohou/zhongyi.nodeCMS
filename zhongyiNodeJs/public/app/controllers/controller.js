var nodeApp = angular.module('adminApp',[]);

nodeApp.controller('roleController',['$scope','$http',function($scope,$http){
    $scope.fuck=function(){
        alert('fuck you everyday !');
         
    };
   
}]);