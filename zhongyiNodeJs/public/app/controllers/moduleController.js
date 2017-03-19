adminMain.controller('moduleController', function ($scope, $rootScope, $timeout, $dialogs, $http, $stateParams, $state, $filter) {

    $scope.name = '';
    $scope.formData = {};

    initPagination($scope, $http, '/common/getDocumentList/module', 'normalList');
    $scope.add = function () {

        $state.go('addmodule');
    }
    $scope.search = function () {
        initPagination($scope, $http, '/common/getDocumentList/module', 'normalList');
    }
    $scope.detail = function (id) {
        $state.go('addmodule', {
            _id: id
        });
    }
    $scope.remove = function (id) {
        $http.get("/backend/module/" + id + "/delete").success(function (res) {
            if (res.isSuccess) {
                $state.go('modules');
            }
        });
    }
    var _id = $stateParams._id;
    if (_id) {
        $http.get("/backend/module/module/" + _id).success(function (res) {
            if (res.isSuccess) {
                $scope.formData = res.data;
            }

        });
    }


    //下拉框框初始化---------------------------------------

    $http.get('/backend/module/modules').success(function (res) {
        $scope.models = res;
    });
    $scope.mycity = [
        { _id: 0, name: '请选择省份' }
    ];
    $scope.c = function () {
        $scope.formData.parentid = $scope.mycity;

    }

    //$scope.filterText=$filter('uppercase')('LaoZhao');
    //----------------------------------------------------




    $scope.processForm = function (isValid) {

        if (isValid) {
            if (_id) {

                $http.post('/backend/module/updatemodule', $scope.formData)
                    .success(function (res) {
                        if (res.isSuccess) {
                            $state.go('modules');
                        }
                    });
            } else {
                $http({
                    method: 'POST',
                    url: '/backend/module/addmodule',
                    data: $scope.formData,  // pass in data as strings
                    dataType: "json",
                    headers: { 'Content-Type': 'application/json' }  // set the headers so angular passing info as form data (not request payload)
                }).success(function (res) {

                    if (res.isSuccess) {

                        $state.go('modules');
                    } else {
                        console.log('错误');
                    }
                });

            }
        }

    }
}) 