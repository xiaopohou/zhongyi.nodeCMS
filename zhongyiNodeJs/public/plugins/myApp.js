//定义自己的module(myModule)
//中括号中的是这个module的依赖
var myModule = angular.module("myModule", ['ui.router']);
myModule.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('form',{
            url:'/form',
            templateUrl:'/form/form.html',
            controller:'myFormController'   //指明控制器
        })
        .state('form.required',{
            url:'/required',
            templateUrl:'/form/form-required.html'
        })
        .state('form.optional',{
            url:'/optional',
            templateUrl:'/form/form-optional.html'
        })
        .state('form.confirm',{
            url:'/confirm',
            templateUrl:'/form/form-confirm.html'
        });
        $urlRouterProvider.otherwise('/form/required');     //匹配所有不在上面的路由
}]);
//定义模块的控制器
myModule.controller('myFormController', ['$scope', function($scope){
    $scope.formData = {};
    $scope.submit = function() {
        alert("Cool, you have registered!");
    };
}]);