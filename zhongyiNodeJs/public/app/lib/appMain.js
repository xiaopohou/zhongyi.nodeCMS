 
adminMain.config(['$stateProvider','$urlRouterProvider',
function($stateProvider,$urlRouterProvider,mainController,roleController,mainController,testController){

    $stateProvider
    .state('app',{
        url:'/app',
        templateUrl:'/form/form-confirm.html',
        controller:mainController
    })
    .state('roles',{
        url:'/roles',
        templateUrl:'/form/roles.html',
         controller:roleController
       

    }).state('addrole',{
        url:'/addrole/:_id',
        templateUrl:'/form/addrole.html'
        
         //templateUrl:'/areas/form-confirm.html'

    })  
        .state('test',{
        url:'/test',
        templateUrl:'/form/test.html',
         controller:testController
 

    })   .state('test2',{
        url:'/test2',
        templateUrl:'/form/test2.html'
 
         //templateUrl:'/areas/form-confirm.html'

    }) 
    .state('menus',{
        url:'/menus',
        templateUrl:'/form/menus.html'
 
         //templateUrl:'/areas/form-confirm.html'

    })
        .state('dicts',{
        url:'/dicts',
        templateUrl:'/form/dicts.html'
 
         //templateUrl:'/areas/form-confirm.html'

    })
        .state('users',{
        url:'/users/index',
        templateUrl:'/form/user/index.html'
 
         //templateUrl:'/areas/form-confirm.html'

    })
            .state('perms',{
        url:'/perms',
        templateUrl:'/form/perms.html'
 
         //templateUrl:'/areas/form-confirm.html'

    })
          .state('cates',{
        url:'/cates',
        templateUrl:'/form/cates.html'
 
         //templateUrl:'/areas/form-confirm.html'

    })
              .state('news',{
        url:'/news',
        templateUrl:'/form/news.html'
 
         //templateUrl:'/areas/form-confirm.html'

    })
          .state('tags',{
        url:'/tags',
        templateUrl:'/form/tags.html'
 
         //templateUrl:'/areas/form-confirm.html'

    })
    .state('default',{
        url:'/default',
        templateUrl:'/form/roles.html'
      
    });

  $urlRouterProvider.otherwise('default'); 
  
}]);

 