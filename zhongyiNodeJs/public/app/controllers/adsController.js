
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

adminMain.controller('adsController', function ($scope, $rootScope, $timeout,  $http, $stateParams, $state, dataPostService, $modal,dataServiceFactory) {
    $scope.formData = {};
    $scope.itemlist={};

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
    $scope.addimgad = function (id,isimg) {
         
        $state.go('addimgad', {
            _id: id,
            isimg: isimg
        });
    }
    $scope.modalTitle ="添加图片";
    $scope.itemsFormData={};
    $scope.popuAddImgAd = function () {
        var data = "通过modal传递的数据";
        var modalInstance = $modal.open({
            templateUrl: 'modal.html',
            controller: 'modalCtrl',
            scope:$scope
            // resolve: {
            //     data: function () {
            //         return data;
            //     },
            //      modalTitle: function () {
            //         return "添加图片";
            //     },
            //      adId: function () {
            //         return _outId;
            //     }
            // }

        })
    }

    $scope.detail = function (id) {
        $state.go('addad', {
            _id: id
        });
    }
 
    $scope.remove = function (id) {
        $http.get("/backend/ad/" + id + "/delete").success(function (res) {
            if (res.isSuccess) {
                $state.go('ads');
            }
        });
    }

    //当前页面传入2个参数
    var _id = $stateParams._id;
    var _isimg = $stateParams.isimg;//广告类型
    
    if(_isimg==-1)
    {
      //默认添加图片标题
 
            $scope.formData.name="1";
            $scope.formData.status=1;
            dataPostService.postdata('/backend/ad/addad', $scope.formData).success(function (res) {
            if (res.isSuccess) {
                $scope.adId=res.data;
                
            }
        });
    }
    if(_id)
    {
        $scope.adId=_id;
        dataServiceFactory.getdata('/backend/ad/oneads?id='+_id).success(function(res){
            if(res.isSuccess)
            {
               $scope.formData= res.data;
               $scope.itemlist=res.data.items;
            }
        });
    }
    $scope.submitAd=function()
    {
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
    
    $scope.delAdsItem=function(id){

    }
    $scope.editAdsItem=function(id){

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

    //刷新图片列表
    $scope.initAdItems=function()
    {
        dataServiceFactory.getdata('/backend/ad/oneads?id='+$scope.adId).success(function(res){
            if(res.isSuccess)
            {
                var data=res.data;
                $scope.formData=data;
                $scope.itemlist=data.items;
            }
        });
    }
})
.controller('modalCtrl', function ($scope,  dataPostService,  $modalInstance) {
 
    var adId=$scope.adId;
    $scope.initFile=function(){
        initUploadFyBtn('uploadAdsImg','images','',function(data){ 
            $("#tempImg").attr("src",data);
            $scope.itemsFormData.coverimage=data;
        });
    }
    
    //在这里处理要进行的操作   
    $scope.ok = function () {
 
        //创建子项
        dataPostService.postdata('/backend/ad/addaditems?adId='+adId,$scope.itemsFormData).success(function(res){
             $scope.initAdItems();
        });
        $modalInstance.dismiss('cancel');
    };
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    }
   
});

