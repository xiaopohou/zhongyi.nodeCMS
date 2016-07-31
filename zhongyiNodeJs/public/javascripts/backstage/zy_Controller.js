//用户组管理
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


    $scope.selectType=[
        {key: '1111', value: '0'},
        {key: '1222', value: '1'}
    ];
    $scope.formData.type='0';
    //初始化分页信息
    initPagination($scope, $http);

    initCurrentPageEvent($scope,$http,'确定要删除吗?');
}]);

//add/edit
userGroupModule.controller("addUserGroup", ['$scope', '$http', 'getItemService', function ($scope, $http, getItemService) {


    $scope.formData = {};
    $scope.selectType = [
        {key: '1111', value: '0'},
        {key: '1222', value: '1'}
    ];
    $scope.formData.type='0';

    $scope.targetId = window.location.href.split('/')[6];

    if ($scope.targetId) {

        //先把对象初始化
        getItemService.itemInfo('userSystemRoleGroupManager', $scope.targetId).success(function (result) {
            console.log('result is ' + result);
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

function initCurrentPageEvent($scope,$http,info) {
    $scope.deleteOne = function (id) {
        if(confirm(info)){
            angularHttpGet($http,'/admin/manager/userSystemRoleGroupManager/delete?id='+id,function (result) {
                console.log('result is :'+result);
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

function  angularHttpGet($http,url,callBack) {
    $http.get(url).success(function (result) {
        if(result=='success'){
            callBack(result);
        }else
        {
            alert('删除失败');
        }
    });
}

//主页管理
var indexModule = angular.module("indexModule", []);

indexModule.controller('indexController', ['$scope', '$http', '$location', function ($scope, $http) {
    $scope.formData = {};

    $scope.deleteOne = function () {
        console.log('我被调用了');
    }
}]);

