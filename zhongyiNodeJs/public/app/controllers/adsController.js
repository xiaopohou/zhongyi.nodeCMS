
/**
 * ajax post 
 */
adminMain.service('dataPostService', ['$http', function ($http) {
    this.postdata = function (url, formdata) {
        return $http.post(url, formdata);
    }
}]);

/**
 * ajax get 
 */
adminMain.factory('dataServiceFactory', ['$http', function ($http) {
    var f = function (url) {
        var path = url;
        return $http.get(url);
    };
    return {
        getdata: function (url) {
            return f(url);
        }
    }
}]);

adminMain.controller('adsController', function ($scope, $rootScope, $timeout, $dialogs, $http, $stateParams, $state, dataPostService) {

    //$scope.name = '';
    $scope.formData = {};
    $scope.adTypes = [
         { name: "-请选择-", value: "-1" },
        { name: "图片", value: "1" },
        { name: "文字", value: "0" }
    ];
    initPagination($scope, $http, '/common/getDocumentList/ad', 'normalList');
    $scope.addad = function () {

        $state.go('addad');
    }

    $scope.detail = function (id) {
        $state.go('addad', {
            _id: id
        });
    }
    $scope.formData.type = "1";
    $scope.classidChanage = function () {

    }
    $scope.remove = function (id) {
        $http.get("/backend/ad/" + id + "/delete").success(function (res) {
            if (res.isSuccess) {
                $state.go('ads');
            }
        });
    }
    var _id = $stateParams._id;
    if (_id) {
        $http.get("/backend/ad/" + _id).success(function (res) {
            $scope.formData = res.data;
        });
    }

    $scope.processForm = function (isValid) {
        if (isValid) {
            if (_id) {
                $http.post('/backend/ad/adupdate', $scope.formData)
                    .success(function (res) {
                        if (res.isSuccess) {
                            $state.go('ads');
                        }
                    });
            } else {
                dataPostService.postdata('/backend/ad/addad', $scope.formData).success(function (res) {
                     if (res.isSuccess) {
                            $state.go('ads');
                        }
                });

            }
        }
    }
});