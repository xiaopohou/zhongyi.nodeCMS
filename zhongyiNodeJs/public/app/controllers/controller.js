var nodeApp = angular.module('adminApp', []);

nodeApp.controller('roleController', ['$scope', '$http', function ($scope, $http) {
    $scope.formData = {};
 
    //分页 
    initPagination($scope, $http, '/common/getDocumentList/role', 'normalList');

    $scope.addrole = function (id) {
 


 
        //编辑1
        if (id != "") {
            var url = '/backend/role/role/' + id;
            $http.get(url).success(function (res) {
                //赋值
                $scope.formData.name="xxxxxxxxxxxxxxxxxxxxxxx";
                //打开窗口
                $.modalOpen({
                    id: "Form",
                    title: "编辑角色",
                    url: "/backend/role/addrole",
                    width: "550px",
                    height: "370px",
                    btn: null
                });

            });
        }
        else {

 
            $.modalOpen({
                id: "Form",
                title: "新增角色",
                url: "/backend/role/addrole",
                width: "550px",
                height: "370px",
                btn: null
            });
        }

    };
 

    $scope.processForm = function (isValid) {
        var roleData =
            {
                name: $scope.formData.name
            };

            
 
        if (isValid) {
            ngPost($http, isValid, "/backend/role/addrole", $scope.formData, function (data) {
                //表格刷新
                top.window.location.reload();
            });
        }

    },
        $scope.test1 = function () {
            window.location = "/backend/role/test1/laozhao";
        }
}]);


