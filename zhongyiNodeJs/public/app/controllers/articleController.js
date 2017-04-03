
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


adminMain.controller('articleController', function ($scope, $state, $http, $rootScope, $stateParams, dataServiceFactory, dataPostService) {
   
    $scope.formData = {};
    // $scope.url='';
    // $scope.coverpage="";
    $scope.formData.kid1 = "";
    $scope.formData.kid2 = "";
    var url_paramArticleId = $stateParams.articleid;

    initPagination($scope, $http, '/common/getDocumentList/article', 'normalList');

    $scope.addarticle = function (v) {
        $state.go('addarticle', {
            articleid: v
        });
    }

    $scope.detail = function (id) {
        $state.go('addarticle', {
            articleid: id
        });
    }
    $scope.classidChanage = function () {
        $scope.formData.kid1 = $scope.formData.classid._id;
         //alert($scope.formData.classid);
    }
    $scope.classid2Chanage = function () {
        $scope.formData.kid2 = $scope.formData.classid2._id
    }
    //初始化分类父级
    dataServiceFactory.getdata('/backend/cms/cates/0').success(function (res) {
        $scope.pmodel = res.data;
    });

    if(url_paramArticleId)
    {
           dataServiceFactory.getdata('/backend/cms/article/' + url_paramArticleId).success(function (res) {
                if(res.isSuccess)
                {
                   // alert(res.data.classid);
                    $scope.formData=res.data;
                    //$scope.formData.classid._id=res.data.classid;
                   //$scope.formData.classid._id=res.data.classid;
                }
            });
           
           
    }
    $scope.processForm = function (isValid) {
     
        //修改
        if (url_paramArticleId) {
                $http.post('/backend/cms/articleupdate', $scope.formData)
                .success(function (res) 
                {
                    if (res.isSuccess) 
                    {
                        $state.go('article');
                    }
            });
            
        }
        else {
            //console.log( "_____________________________",$scope.formData);
            

            $http.post('/backend/cms/article', $scope.formData)
                .success(function (res) 
                {
                    if (res.isSuccess) 
                    {
                        $state.go('article');
                    }
            });
 
            // dataPostService.postdata('/backend/cms/article', $scope.articleFormData).success(function (res) {
            //     if (res.isSuccess) {
            //         $state.go('article');
            //     }
            // });
        }
    }
 
    dataServiceFactory.getdata('/backend/cms/allarticlecates').success(function (res) {
        $scope.cateMap = res.data;
    });

});