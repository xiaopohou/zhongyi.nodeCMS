
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

adminMain.controller('adsController', function ($scope, $rootScope, $timeout, $dialogs, $http, $stateParams, $state, dataPostService, $modal) {
    $scope.formData = {};
    $scope.adTypes = [
        { name: "-请选择-", value: -1 },
        { name: "图片", value: 1 },
        { name: "文字", value: 0 }
    ];
  

    initPagination($scope, $http, '/common/getDocumentList/ad', 'normalList');
    $scope.addad = function () {

        $state.go('addad', {
            _id: 0,
            isimg: 0
        });
    }
    //图片广告
    $scope.addimgad = function () {
        $state.go('addimgad', {
            _id: 0,
            isimg: 1
        });
    }
        

    // 初始化上传按钮
    initUploadFyBtn('uploadAdsImg','images','',function(data){
            
    });

    $scope.popuAddImgAd = function () {
        var data = "通过modal传递的数据";
        var modalInstance = $modal.open({
            templateUrl: 'modal.html',
            controller: 'modalCtrl',
            resolve: {
                data: function () {
                    return data;
                },
                 modalTitle: function () {
                    return "添加图片";
                }
            }
        })
        modalInstance.opened.then(function() {// 模态窗口打开之后执行的函数  
            
                    //alert('xx');
         });  
    }

 
    $scope.detail = function (id) {
        $state.go('addad', {
            _id: id
        });
    }
    $scope.formData.type = -1;
 
    $scope.remove = function (id) {
        $http.get("/backend/ad/" + id + "/delete").success(function (res) {
            if (res.isSuccess) {
                $state.go('ads');
            }
        });
    }
    var _id = $stateParams._id;
    var _isimg = $stateParams.isimg;//广告类型


    $scope.formData.type = -1;
    if (_id) {

        $http.get("/backend/ad/" + _id).success(function (res) {
            $scope.formData = res.data;

            //$scope.formData.type=res.data.type;
        });
    }

    $scope.processForm = function (isValid) {
        if (isValid) {
            $scope.formData.type = 0;
            if (_id != 0) {
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

    $scope.processImgForm = function (isValid) {
        if (isValid) {
            $scope.formData.type = 1;
            if (_id != 0) {
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
}).controller('modalCtrl', function ($scope, $modalInstance, data,modalTitle) {

 

 
    $scope.data = data;
    $scope.modalTitle =modalTitle;
    //在这里处理要进行的操作   
    $scope.ok = function () {
        alert('xxx');
        $modalInstance.close();
    };
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    }
});