 
adminMain.config(['$stateProvider','$urlRouterProvider',
function($stateProvider,$urlRouterProvider,mainController,roleController,mainController,testController){

    $stateProvider
    .state('app',{
        url:'/app',
        templateUrl:'/form/form-confirm.html',
        controller:mainController
    })
    .state('role',{
        url:'/role',
        templateUrl:'/form/role.html',
         controller:roleController
         //templateUrl:'/areas/form-confirm.html'

    })
        .state('test',{
        url:'/test',
        templateUrl:'/form/test.html',
         controller:mainController
 

    })   .state('test2',{
        url:'/test2',
        templateUrl:'/form/test2.html'
 
         //templateUrl:'/areas/form-confirm.html'

    })
    .state('default',{
        url:'/default',
        templateUrl:'/form/form.html'
      
    });

  $urlRouterProvider.otherwise('default'); 
  
}]);

 