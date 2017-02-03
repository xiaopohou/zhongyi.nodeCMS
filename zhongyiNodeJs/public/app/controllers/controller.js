var nodeApp = angular.module('nodeApp',[]);

nodeApp.controller('roleController',['$scope','$http',function($scope,$http){
    $scope.fuck=function(){
        alert('fuck you everyday !');
    }
}]);