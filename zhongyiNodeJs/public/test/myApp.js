//定义自己的module(myModule)
//中括号中的是这个module的依赖
var myModule = angular.module("myModule", ['ngAnimate','ui.router']);
myModule.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('form',{
            url:'/form',
            templateUrl:'form.html',
            controller:'myFormController'   //指明控制器
        })
        .state('form.required',{
            url:'/required',
            templateUrl:'form-required.html'
        })
        .state('form.optional',{
            url:'/optional',
            templateUrl:'form-optional.html'
        })
        .state('form.confirm',{
            url:'/confirm',
            templateUrl:'form-confirm.html'
        });
        $urlRouterProvider.otherwise('/form/required');     //匹配所有不在上面的路由
}]);
//定义模块的控制器
myModule.controller('myFormController', ['$scope', function($scope){
    $scope.formData = {};
    $scope.name="laozhao";
    $scope.submit = function() {
        alert("Cool, you have registered!");
    };
}]);