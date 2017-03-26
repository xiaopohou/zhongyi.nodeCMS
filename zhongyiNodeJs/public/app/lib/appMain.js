
adminMain.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider,
        $urlRouterProvider,
        mainController,
        roleController,
        mainController,
        testController,
        adminController,
        moduleController,
        permsController,
        cmsController,
        userController,
        systemControll,
        askController,
        systemController,
        loginController
    ) {

        $stateProvider
            .state('app', {
                url: '/app',
                templateUrl: '/form/form-confirm.html',
                controller: mainController
            })
            .state('roles', {
                url: '/roles',
                templateUrl: '/form/roles.html',
                controller: roleController
            }).state('addrole', {
                url: '/addrole/:_id',
                templateUrl: '/form/addrole.html'
            })
            .state('addadmin', {
                url: '/addadmin/:_id',
                templateUrl: '/form/admins/addadmin.html'
            }).state('admins', {
                url: '/admins/index',
                templateUrl: '/form/admins/index.html',
                controller: adminController
            })
            .state('addmodule', {
                url: '/addmodule/:_id',
                templateUrl: '/form/modules/addmodule.html'
            }).state('modules', {
                url: '/modules/index',
                templateUrl: '/form/modules/index.html',
                controller: moduleController
            })
            .state('test', {
                url: '/test',
                templateUrl: '/form/test.html',
                controller: testController
            }).state('test2', {
                url: '/test2',
                templateUrl: '/form/test2.html'
            })
            .state('menus', {
                url: '/menus',
                templateUrl: '/form/menus.html'
            })
            .state('dicts', {
                url: '/dicts',
                templateUrl: '/form/dicts.html'
            })

            .state('perms', {
                url: '/perms',
                templateUrl: '/form/perms.html',
                controller: permsController
            })
            .state('articlecate', {
                url: '/article/articlecates',
                templateUrl: '/form/articles/articlecate.html'
            })
            .state('news', {
                url: '/news',
                templateUrl: '/form/articles/article.html'
            })  
              .state('addarticle', {
                url: '/article/addarticle/:articleid',
                templateUrl: '/form/articles/addarticle.html'
            })
                .state('addarticlecate', {
                url: '/article/cates/add/:cateid',
                templateUrl: '/form/articles/addarticlecate.html',
                controller:cmsController
            })
            .state('tags', {
                url: '/tags',
                templateUrl: '/form/tags.html'
            })
            .state('perms.tab1', {
                url: '/tabs/tab1',
                templateUrl: '/form/tabs/tab1.html',
                controller: permsController
            })
            .state('perms.tab2', {
                url: '/tabs/tab2',
                templateUrl: '/form/tabs/tab2.html',
                controller: permsController
            })
            //   .state('article',{
            //         url:'/articles/article',
            //         templateUrl:'/form/articles/article.html',
            //         controller:articleController
            //     })
            //       .state('addarticle',{
            //         url:'/articles/addarticle',
            //         templateUrl:'/form/articles/addarticle.html',
            //         controller:articleController
            //     })
            //   .state('articlecate',{
            //         url:'/articles/articlecate',
            //         templateUrl:'/form/articles/articlecate.html',
            //         controller:articleController
            //     })
            //       .state('addarticlecate',{
            //         url:'/articles/addarticlecate',
            //         templateUrl:'/form/articles/addarticlecate.html',
            //         controller:articleController
            //     })
            //       .state('articlecate',{
            //         url:'/articles/articlecate/add',
            //         templateUrl:'/form/articles/articlecate.html',
            //         controller:articleController
            //     })
            .state('systems', {
                url: '/systems/system',
                templateUrl: '/form/systems/system.html',
                controller: systemController
            })
            //       .state('addsystems',{
            //         url:'/systems/system/add',
            //         templateUrl:'/form/systems/addsystem.html',
            //         controller:systemController
            //     })
            .state('asks', {
                url: '/articles/ask',
                templateUrl: '/form/articles/ask.html',
                controller: askController
            })
            .state('users', {
                url: '/users/index',
                templateUrl: '/form/users/index.html',
                controller: userController
            })
            .state('adduser', {
                url: '/users/adduser/:_id',
                templateUrl: '/form/users/adduser.html',
                controller: userController
            })
            .state('login', {
                url: '/login',
                templateUrl: '/form/login/login.html',
                controller: loginController

            })
            .state('default', {
                url: '/default',
                templateUrl: '/form/roles.html'
            });

        $urlRouterProvider.otherwise('default');
    }]);

