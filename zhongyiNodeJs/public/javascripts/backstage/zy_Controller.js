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

    //初始化分页信息
    initPagination($scope, $http);

    $scope.deleteOne = function () {
        console.log('我被调用了');
    }
}]);

//add/edit
userGroupModule.controller("addUserGroup", ['$scope', '$http', 'getItemService', function ($scope, $http, getItemService) {


    $scope.formData = {};

    console.log('前台值变了'+$scope.formData.state+'    name is '+$scope.formData.name);


    $scope.targetId = window.location.href.split('/')[6];
    if ($scope.targetId) {
        //先把对象初始化
        getItemService.itemInfo('userSystemRoleGroupManager', $scope.targetId).success(function (result) {
            console.log('result is ' + result);
            $scope.formData = result;
            // $scope.formData.name = result.name;
            // $scope.formData.state = result.state;
            // $score.formData.description = result.description;
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


//主页管理
var indexModule = angular.module("indexModule", []);

indexModule.controller('indexController', ['$scope', '$http', '$location', function ($scope, $http) {
    $scope.formData = {};

    $scope.deleteOne = function () {
        console.log('我被调用了');
    }
}]);

