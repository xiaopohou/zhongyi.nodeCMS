var nodeApp = angular.module('adminApp', []);

nodeApp.controller('roleController', ['$scope', '$http', function ($scope, $http) {
    $scope.fuck = function () {
        alert('fuck you everyday !');
    };
    //弹出信息添加
    $scope.showinfo = function () {
        $.modalOpen({
            id: "Form",
            title: "新增角色",
            url: "/backend/role/index2",
            width: "550px",
            height: "570px",
            btn: null
        });
    }
}]);