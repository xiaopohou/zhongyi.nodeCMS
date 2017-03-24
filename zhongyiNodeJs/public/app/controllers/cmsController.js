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
    //select
    // $scope.model = [{
    //     id: 10001,
    //     mainCategory: '男',
    //     productName: '水洗T恤',
    //     productColor: '白'
    // }, {
    //     id: 10002,
    //     mainCategory: '女',
    //     productName: '圆领短袖',
    //     productColor: '黑'
    // }, {
    //     id: 10003,
    //     mainCategory: '女',
    //     productName: '短袖短袖',
    //     productColor: '黃'
    // }];

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