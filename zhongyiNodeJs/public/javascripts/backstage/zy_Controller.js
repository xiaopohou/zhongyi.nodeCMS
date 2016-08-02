//------------------------------userGroupModule----用户组管理----------------------------------
var userGroupModule = angular.module("userGroupModule", []);


userGroupModule.factory('getItemService', ['$http', function ($http) {
    var getItemRequest = function (currentPage, targetId) {
        var _path = "/admin/manager/" + currentPage + "/item/?id=" + targetId;

        return $http.get(_path);
    };
    return {
        itemInfo: function (currentPage, targetId) {
            return getItemRequest(currentPage, targetId);
        }
    }
}]);

userGroupModule.controller('userGroupController', ['$scope', '$http', function ($scope, $http) {
    $scope.formData = {};


    $scope.selectType = [
        {key: '1111', value: '0'},
        {key: '1222', value: '1'}
    ];
    $scope.formData.type = '0';
    //初始化分页信息
    initPagination($scope, $http);

    initCurrentPageEvent($scope, $http, '确定要删除吗?');
}]);

//add/edit
userGroupModule.controller("addUserGroup", ['$scope', '$http', 'getItemService', function ($scope, $http, getItemService) {


    $scope.formData = {};
    $scope.selectType = [
        {key: '1111', value: '0'},
        {key: '1222', value: '1'}
    ];
    $scope.formData.type = '0';

    $scope.targetId = window.location.href.split('/')[6];

    if ($scope.targetId) {
        //先把对象初始化
        getItemService.itemInfo('userSystemRoleGroupManager', $scope.targetId).success(function (result) {
            $scope.formData = result;
        });
    }
    $scope.submitForm = function (isValid) {
        var url = '/admin/manager/SystemRole/add';
        if ($scope.targetId) {
            url = '/admin/manager/SystemRole/modify?id=' + $scope.targetId;
        }
        angularHttpPost($http, isValid, url, $scope.formData, function (data) {
            window.location.href = '/admin/manager/managerUserGroup'
        });
    }
}]);

function initCurrentPageEvent($scope, $http, info) {
    $scope.deleteOne = function (id) {
        if (confirm(info)) {
            angularHttpGet($http, '/admin/manager/userSystemRoleGroupManager/delete?id=' + id, function (result) {
                console.log('result is :' + result);
                initPagination($scope, $http);
            });
        }
    }
}

//angularJs https Post方法封装
function angularHttpPost($http, isValid, url, formData, callBack) {
    if (isValid) {
        $http({
            method: 'POST',
            url: url,
            data: $.param(formData),  // pass in data as strings
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
        })
            .success(function (data) {

                if (data == 'success') {
                    callBack(data);
                } else {
                    console.log('error' + data);
                }
            });
    }
    else {
        console.log('未通过验证');
    }
}

function angularHttpGet($http, url, callBack) {

    $http.get(url).success(function (result) {
        if (result == 'success') {
            callBack(result);
        } else {
            alert('获取数据失败');
        }
    });
}

//------------------------------indexModule----主页管理----------------------------------
var indexModule = angular.module("indexModule", []);

indexModule.controller('indexController', ['$scope', '$http', function ($scope, $http) {
    $scope.formData = {};


}]);


//------------------------------UserModule----用户管理----------------------------------
var userModule= angular.module('userModule',[]);

userModule.factory('getItemServiceForUser', ['$http', function ($http) {
    var getItemRequest = function (currentPage, targetId) {

        var _path = "/admin/manager/" + currentPage + "/item/?id=" + targetId;

        console.log('_path is :'+_path);

        return $http.get(_path);
    };
    return {
        itemInfo: function (currentPage, targetId) {
            return getItemRequest(currentPage, targetId);
        }
    }
}]);

//用户列表页
userModule.controller('systemUserList',['$scope','$http',function ($scope,$http) {
    $scope.formData={};
    initCurrentPageEventForManagerUser($scope,$http);

}]);
//用户添加页
userModule.controller('systemUserAdd',['$scope','$http','getItemServiceForUser',function ($scope,$http,getItemServiceForUser) {
    $scope.formData={};
    $scope.sexs=[
        {name:"男",value:"1"},
        {name:"女",value:"2"}
    ];
    $scope.formData.userSex="2";

    //检查是否有参数标志参数传入
    $scope.targetId=window.location.href.split('/')[6];





    if($scope.targetId){
        //先把对象初始化
        getItemServiceForUser.itemInfo('userSystemUserManager', $scope.targetId).success(function (result) {
            $scope.formData = result;
        });

    }else{

    }

    $scope.submitForm=function (isValid) {
        var url='/admin/manager/userSystemUserManager/add';
        if($scope.targetId){

            url='/admin/manager/userSystemUserManager/modify/?id='+$scope.targetId;
        }
        angularHttpPost($http,isValid,url,$scope.formData,function (result) {
            if(result=='success'){
                window.location.href='/admin/manager/managerUser'
            }else {
                console.log('修改,添加错误');
            }
        })
    }
}]);
