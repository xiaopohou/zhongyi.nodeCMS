adminMain.controller('adminController', function ($scope, $rootScope,
    $timeout, $dialogs, $http, $stateParams, $state) {

    $scope.name = '';
    $scope.formData = {};
    initPagination($scope, $http, '/common/getDocumentList/admin', 'normalList');
    $scope.add = function () {
        $state.go('addadmin');
    }
    $scope.search = function () {

        initPagination($scope, $http, '/common/getDocumentList/admin', 'normalList');
    }
    $scope.detail = function (id) {
        $state.go('addadmin', {
            _id: id
        });
    }
    $scope.remove = function (id) {
        $http.get("/backend/admin/" + id + "/delete").success(function (res) {
            if (res.isSuccess) {
                $state.go('admins');
            }
        });
    }
    var _id = $stateParams._id;
    if (_id) {
        $http.get("/backend/admin/admin/" + _id).success(function (res) {
            $scope.formData = res.data;
        });
    }

    $scope.processForm = function (isValid) {
        if (isValid) {
            var _url = "";
            if (_id) {
                _url = "/backend/admin/updateadmin";

            } else {
                _url = "/backend/admin/addadmin";
            }
            $http({
                method: 'POST',
                url: _url,
                data: $scope.formData,  // pass in data as strings
                dataType: "json",
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            }).success(function (res) {
                if (res.isSuccess) {
                    $state.go('admins');
                } else {
                    console.log('错误');
                }
            });
        }

    }
});
