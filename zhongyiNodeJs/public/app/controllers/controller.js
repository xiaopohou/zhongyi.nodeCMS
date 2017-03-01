var nodeApp = angular.module('adminApp', []);

nodeApp.controller('roleController', ['$scope', '$http', function ($scope, $http) {
    $scope.formData = {};
    //分页 
    initPagination($scope, $http, '/common/getDocumentList/role', 'normalList');
    //删除 
    $scope.itemDelete=function(itemId){
    
        $http({
            type: 'get',
            url:'/backend/role/'+itemId+'/delete',
            dataType:"json",
            success:function(data){
               alert('1111');
               
            }
        });
    };

    $('#myModal').on('show.bs.modal', function (event) {
        var obj = $(event.relatedTarget);
        var oid = obj.data("whatever");
        var modalTitle = $(this).find('.modal-title');

        if (oid) {
            modalTitle.text('修改');
            var url = '/backend/role/role/' + oid;
            $http.get(url).success(function (res) {
                $scope.formData = res.data;

            });
        } else {
            modalTitle.text('添加');
            $scope.formData = {};
        }
    }).on('hide.bs.modal', function () {
        closeModal($scope, $(this));
    });

    initValidateForForm("myform");

    $scope.processForm = function (isValid) {
        var roleData =
            {
                name: $scope.formData.name
            };
        if (isValid) {
            ngPost($http, isValid, "/backend/role/addrole", $scope.formData, function (res) {
                 
                //表格刷新
                top.window.location.reload();
            });
        }

    }
}]);
//系统用户
nodeApp.controller('adminController', ['$scope', '$http', function ($scope, $http) {
    $scope.formData = {};
    //分页 
    initPagination($scope, $http, '/common/getDocumentList/admin', 'normalList');

    $('#myModal').on('show.bs.modal', function (event) {
        var obj = $(event.relatedTarget);
        var oid = obj.data("whatever");
        var modalTitle = $(this).find('.modal-title');

        if (oid) {
            modalTitle.text('修改用户');
            var url = '/backend/admin/admin/' + oid;
            $http.get(url).success(function (res) {
                $scope.formData = res.data;
                $scope.formData.itemId = oid;
            });
        } else {
            modalTitle.text('添加用户');
            $scope.formData = {};
            $scope.formData.itemId = "";
        }
    }).on('hide.bs.modal', function () {
        closeModal($scope, $(this));
    });

    initValidateForForm("myform");

    $scope.processForm = function (isValid) {
        var _itemId=$scope.formData.itemId;
        if (isValid) {
            if (_itemId == "") {
                    ngPost($http, isValid, "/backend/admin/addadmin", $scope.formData, function (data) {
                 
                        top.window.location.reload();
                    });
            }else
            {
                 //+_itemId
                    ngPost($http, isValid, "/backend/admin/updateadmin", $scope.formData, function (data) {
                    top.window.location.reload();
                });
            }
        }
    }
}]);

//菜单
nodeApp.controller('moduleControler',['$scope','$http',function($scope,$http){
    $scope.formData={};
     $('#myModal').on('show.bs.modal', function (event) {
        var obj = $(event.relatedTarget);
        var oid = obj.data("whatever");
        var modalTitle = $(this).find('.modal-title');

        if (oid) {
            modalTitle.text('修改菜单');
            var url = '/backend/admin/admin/' + oid;
            $http.get(url).success(function (res) {
                $scope.formData = res.data;
                $scope.formData.itemId = oid;
            });
        } else {
            modalTitle.text('添加菜单');
            $scope.formData = {};
            $scope.formData.itemId = "";
        }
    }).on('hide.bs.modal', function () {
        closeModal($scope, $(this));
    });
    $scope.create=function()
    {
        window.location.href="";
    }
    //提交
       $scope.processForm = function (isValid) {
        var _itemId=$scope.formData.itemId;
        if (isValid) {
            if (_itemId == "") {
                  
                    ngPost($http, isValid, "/backend/module/addModule", $scope.formData, function (data) {
              
                        //top.window.location.reload();
                    });
            }else
            {
                 //+_itemId
                    ngPost($http, isValid, "/backend/module/updateadmin", $scope.formData, function (data) {
                    top.window.location.reload();
                });
            }
        }
    }
    
}]);


