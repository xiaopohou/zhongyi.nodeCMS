adminMain.controller('loginController', function ($scope, $rootScope, $state, $stateParams) {
    //login in 
    $scope.processform = function (isvalid) {
        if (isvalid) {
            $http({
                method: 'POST',
                url: "/backend/login/dologin",
                data: $.param($scope.loginData),  // pass in data as strings
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // s
            }).success(function (data) {
                alert(data);
            });
        }
    }
});