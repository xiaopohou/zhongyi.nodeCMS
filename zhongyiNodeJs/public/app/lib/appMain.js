 
adminMain.config(['$stateProvider','$urlRouterProvider',
function($stateProvider,
$urlRouterProvider,
mainController,
roleController,
mainController,
testController,
adminController,
moduleController,
permsController){

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
    .state('addadmin',{
        url:'/addadmin/:_id',
        templateUrl:'/form/admins/addadmin.html'
        
         //templateUrl:'/areas/form-confirm.html'

    })  .state('admins',{
        url:'/admins/index',
        templateUrl:'/form/admins/index.html',
        controller:adminController
        
         //templateUrl:'/areas/form-confirm.html'

    })   
        .state('addmodule',{
        url:'/addmodule/:_id',
        templateUrl:'/form/modules/addmodule.html'
        
         //templateUrl:'/areas/form-confirm.html'

    })  .state('modules',{
        url:'/modules/index',
        templateUrl:'/form/modules/index.html',
        controller:moduleController
        
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
       
            .state('perms',{
        url:'/perms',
        templateUrl:'/form/perms.html',
         controller:permsController

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

 