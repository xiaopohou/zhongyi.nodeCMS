//用户组管理
var userGroupModule = angular.module("userGroupModule", []);

userGroupModule.controller('userGroupController', ['$scope', '$http', function ($scope, $http) {
    $scope.formData = {};
    //初始化分页信息
    initPagination($scope, $http);

    $scope.addSystemRole=function () {



        console.log('我被调用了');
    }


    $scope.deleteOne = function () {
        console.log('我被调用了');
    }
}]);

//添加角色组
userGroupModule.controller("addUserGroup",['$scope','$http',function ($scope,$http) {
    console.log('我被调用了1');
    $scope.formData={};

    $scope.submitForm=function (isValid) {
        console.log('我被调用了2');
       var url='/admin/manager/SystemRole/add';
       angularHttpPost($http,isValid,url,$scope.formData,function (data) {
           console.log('我被调用了3');
           console.log('data is:'+data);
           window.location.href='/admin/manager/managerUserGroup'
       });
   }
    console.log('我被调用了4');
}]);

//angularJs https Post方法封装
function angularHttpPost($http,isValid,url,formData,callBack){
    if(isValid){
        $http({
            method  : 'POST',
            url     : url,
            data    : $.param(formData),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        })
            .success(function(data) {

                if(data == 'success'){
                    callBack(data);
                }else{
                    console.log('error'+data);
                }
            });
    }
    else{
        console.log('未通过验证');
    }
}


//主页管理
var indexModule = angular.module("indexModule", []);

indexModule.controller('indexController', ['$scope', '$http','$location', function ($scope, $http) {
    $scope.formData = {};

    $scope.deleteOne = function () {
        console.log('我被调用了');
    }
}]);

