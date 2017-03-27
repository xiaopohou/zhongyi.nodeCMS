adminMain.service('testService', function () {
    this.fuck = function (a) {
        return a * 7;
    }
});
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


adminMain.controller('cmsController', function ($scope, $state, $http, $rootScope, $stateParams, dataServiceFactory, dataPostService) {
    $scope.cateFormData = {};
    $scope.articleFormData = {};

    $scope.name = '';
 
    initPagination($scope, $http, '/common/getDocumentList/article', 'normalList');

    $scope.addarticle = function (v) {
        $state.go('addarticle', { articleid: v });
    }

    $scope.search = function () {
        initPagination($scope, $http, '/common/getDocumentList/admin', 'normalList');
    }
    $scope.detail = function (id) {
        $state.go('addarticlecate', {
            cateid: id
        });
    }


    /**
     * 由于文章分类与文章公用一个controller,所以在编辑的时候需要根据状态参数来判定当前操作的是对应的业务模型(文章还是分类)
     * 
     * 此处做了一个特殊处理，通过路由参数往当前controller里传值，根据数值判断如何执行对应模型的业务逻辑
     * 
     */
    var url_paramCateId = $stateParams.cateid;
    var url_paramArticleId = $stateParams.articleid;
    //分类操作
    if (url_paramCateId != '') {
        //获取获取父类集合
        dataServiceFactory.getdata('/backend/cms/cates/0').success(function (res) {

            $scope.pmodel = res.data;
        });

        //添加分类
        if (url_paramCateId == -1) {
            // dataPostService.postdata('/backend/cms/');
            console.log("______________x___________________");
        }
        else {
            //初始化分类
            dataServiceFactory.getdata('/backend/cms/cate/' + url_paramCateId).success(function (res) {
                var d = res.data;
                $scope.cateFormData = d;
                $scope.cateFormData.pid = d.parentid;

                // alert(d.parentid);

            });


        }
        //加载分类列表
        initPagination($scope, $http, '/common/getDocumentList/articlecate', 'normalList');

        //console.log("______________1___________________" + url_paramCateId);
        //获取获取父类集合
        // dataServiceFactory.getdata('/backend/cms/cates/0').success(function (res) {

        //     $scope.pmodel = res.data;
        // });

        // $http.get('/backend/cms/cate/' + url_paramCateId).success(function (res) {
        //     if (res.isSuccess) {

        //         $scope.pmodel = res.data;
        //     }
        // });
    }
    //添加文章的一级分类
    $scope.articlePmodel = {};
    //添加文章的二级分类
    $scope.articleChildmodel = {};
    $scope.cateMap=[];
    //测试方法--------------------
    dataServiceFactory.getdata('/backend/cms/allarticlecates').success(function (res) {
        $scope.cateMap = res.data;
    });
     $scope.classidChanage = function () {
           //$scope.classid2="";
    }
    //测试方法--------------------




    //文章操作
    if (url_paramArticleId != '') {
        //初始化一级分类
        dataServiceFactory.getdata('/backend/cms/cates/0').success(function (res) {

            $scope.articlePmodel = res.data;


            // alert(d.parentid);

        });

        if (url_paramArticleId == -1) {

        } else {

        }
        //console.log("______________url_paramArticleId___________________" + url_paramArticleId);
    }

    $scope.addcate = function (v) {

        $state.go('addarticlecate', { cateid: v });
    }
    $scope.cateFormData.parentid = 0;
    //添加分类
    $scope.submitartcate = function () {

        //分类操作
        if (url_paramCateId != '') {
            //添加
            if (url_paramCateId == -1) {
                //添加
                $scope.cateFormData.parentid = $scope.cateFormData.pid == undefined ? 0 : $scope.cateFormData.pid;
                console.log("_________________11111111111________________" + $scope.cateFormData.pid);
                dataPostService.postdata('/backend/cms/cate', $scope.cateFormData).success(function (res) {
                    if (res.isSuccess) {
                        $state.go('articlecate');
                    }

                });
            } else {
                $scope.cateFormData.parentid = $scope.cateFormData.pid;
                dataPostService.postdata('/backend/cms/cateupdate', $scope.cateFormData).success(function (res) {
                    if (res.isSuccess) {
                        $state.go('articlecate');
                    }
                });
            }
        }
    }

    $scope.remove = function (id) {
        $http.get("/backend/admin/" + id + "/delete").success(function (res) {
            if (res.isSuccess) {
                $state.go('admins');
            }
        });
    }
});