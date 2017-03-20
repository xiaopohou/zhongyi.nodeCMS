adminMain.controller('permsController', function ($scope, $rootScope, $timeout, $dialogs, $http, $stateParams, $state) {

     $scope.isActive = true;
 	 $scope.formData={};

    

     $scope.todo=function()
     {
            console.log($scope.formData.name+$scope.formData.age);
     }
          $scope.clear=function()
     {
             $scope.formData={};
     }
});