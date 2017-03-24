adminMain.controller('cmsController', function ($scope, $state, $http, $rootScope, $stateParams) {
    $scope.cateFormData = {};
    $scope.articleFormData = {};

    $scope.name = '';
    //收集文章信息
    $scope.articleformData = {};
    //收集分类信息
    $scope.cateformData = {};
    initPagination($scope, $http, '/common/getDocumentList/article', 'normalList');
    $scope.addarticle = function () {
        $state.go('addarticle');
    }
    $scope.search = function () {

        initPagination($scope, $http, '/common/getDocumentList/admin', 'normalList');
    }
    $scope.detail = function (id) {
        $state.go('addadmin', {
            _id: id
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
          console.log("_________________________________"+url_paramCateId);

        $http.get('/backend/cms/cate/'+url_paramCateId).success(function (res) {
            if (res.isSuccess) {
                
                $scope.pmodel = res.data;
            }
        });
    }

    //文章操作
    if (url_paramArticleId != '') {

    }
    $scope.addcate = function (v) {
           
        $state.go('addarticlecate',{cateid:v});
    }
    $scope.submitartcate = function () {

    }
    $scope.remove = function (id) {
        $http.get("/backend/admin/" + id + "/delete").success(function (res) {
            if (res.isSuccess) {
                $state.go('admins');
            }
        });
    }
    // var _id = $stateParams._id;
    // if (_id) {
    //     $http.get("/backend/admin/admin/" + _id).success(function (res) {
    //         $scope.formData = res.data;
    //     });
    // }

    // $scope.submitarticle = function (isValid) {
    //     if (isValid) {

    //         if (_id) {

    //             $http.post('/backend/admin/updateadmin', $scope.formData)
    //                 .success(function (res) {
    //                     if (res.isSuccess) {
    //                         $state.go('admins');
    //                     }
    //                 });
    //         } else {
    //             $http({
    //                 method: 'POST',
    //                 url: '/backend/cms/addadmin',
    //                 data: $scope.formData,  // pass in data as strings
    //                 dataType: "json",
    //                 headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
    //             }).success(function (res) {

    //                 if (res.isSuccess) {

    //                     $state.go('admins');
    //                 } else {
    //                     console.log('错误');
    //                 }
    //             });
    //         }
    //     }

    // }


});