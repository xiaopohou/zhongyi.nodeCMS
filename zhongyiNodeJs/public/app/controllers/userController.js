adminMain.controller('userController', function ($scope, $http, $stateParams, $state) {
    $scope.name = '';
    $scope.formData = {};
    initPagination($scope, $http, '/common/getDocumentList/user', 'normalList');
    $scope.add = function () {
        $state.go('adduser');
    }
    $scope.search = function () {
        initPagination($scope, $http, '/common/getDocumentList/user', 'normalList');
    }
    $scope.detail = function (id) {
        $state.go('adduser', {
            _id: id
        });
    }
    $scope.remove = function (id) {
        $http.get("/backend/uesr/" + id + "/delete").success(function (res) {
            if (res.isSuccess) {
                $state.go('users');
            }
        });
    }
    var _id = $stateParams._id;
    if (_id) {
        $http.get("/backend/user/" + _id + "/user").success(function (res) {
            if (res.isSuccess) {
                $scope.formData = res.data;
            }

        });
    }

    $scope.processForm = function (isValid) {
        if (isValid) {

            if (_id) {
 
                // $http({
                //     method: 'post',
                //     url: '/backend/user/updateuser',
                //     data: $scope.formData,  
                //     dataType: "json",
                //     //headers: { 'Content-Type': 'application/x-www-form-urlencoded' },  // set the headers so angular passing info as form data (not request payload)
                //     success: function (res) {
                //          
                //         $state.go('users');
                //     }
                // });


                  $http.post('/backend/user/updateuser', $scope.formData)
                    .success(function (res) {
                        if (res.isSuccess) {
                            $state.go('users');
                        }
                    });
            } else {
                $http({
                    method: 'POST',
                    url: '/backend/user/adduser',
                    data: $scope.formData,  // pass in data as strings
                    dataType: "json",
                    //headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
                }).success(function (res) {
                    
                    if (res.isSuccess) {
                     $state.go('users');
                     
                    } else {
                        console.log('错误');
                    }
                });
            }
        }

    }


});