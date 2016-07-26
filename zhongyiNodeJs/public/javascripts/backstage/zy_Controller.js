
//用户组管理
var userGroupModule= angular.module("userGroupModule",[]);

userGroupModule.controller('userGroupController',['$scope','$http',function ($scope,$http) {
    $scope.formData={};

    $scope.deleteOne=function () {
        console.log('我被调用了');
    }
}]);




//主页管理
var indexModule= angular.module("indexModule",[]);

indexModule.controller('indexController',['$scope','$http',function ($scope,$http) {
    $scope.formData={};

    $scope.deleteOne=function () {
        console.log('我被调用了');
    }
}]);