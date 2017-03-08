var adminMain= angular.module('adminMain',['ui.router']);
adminMain.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $stateProvider
    .state('app',{
        url:'/app',
        templateUrl:'/form/form-confirm.html',
        controller:'mainController'
    })
    .state('role',{
        url:'/role',
        templateUrl:'/form/role.html'
         //templateUrl:'/areas/form-confirm.html'

    })
    .state('default',{
        url:'/default',
        templateUrl:'/form/form.html'
      
    });

  $urlRouterProvider.otherwise('default'); 
  
}]);

adminMain.controller('mainController',['$scope',function($scope){
    $scope.formData={};
    $scope.formData.name="laozhao";
}]);