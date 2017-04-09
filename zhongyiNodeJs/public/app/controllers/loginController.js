adminMain.controller('loginController', function ($scope, $rootScope, $state, $stateParams,$http) {
    $scope.formData = {};
    //console.log( $scope.formData);
    $scope.processform = function (isvalid) {
     
        $http.post("/backend/login/dologin", $scope.formData).success(function (res) {
   
            if (res.isSuccess) {
                window.location.href="/backend/default/";
                // console.log(res.errorMessage);
            }else
            {
                alert(res.errorMessage);
            }
        });
    }
    $scope.loginout=function()
    {
         $http.get('/backend/login/loginout').success(function(res){
           if(res.isSuccess){
                window.location.href="/backend/login/";
           }
         })
    }
    //login in 
    // $scope.processform = function (isvalid) {
    //     if (isvalid) {
    //         $http({
    //             method: 'POST',
    //             url: "/backend/login/dologin",
    //             data: $.param($scope.loginData),  // pass in data as strings
    //             headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // s
    //         }).success(function (data) {
    //             alert(data);
    //         });
    //     }
    // }
});


       