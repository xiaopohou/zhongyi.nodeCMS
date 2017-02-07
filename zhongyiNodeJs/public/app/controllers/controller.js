var nodeApp = angular.module('adminApp',[]);

nodeApp.controller('roleController', ['$scope', '$http', function ($scope, $http) {
    $scope.formData={};
    $scope.refresh = function () {
        alert('fuck you everyday !');
    };
    
    $scope.addrole = function () {
        $.modalOpen({
            id: "Form",
            title: "新增角色",
            url: "/backend/role/addrole",
            width: "550px",
            height: "570px",
            btn: null
        });
    };
    $scope.processForm=function(isValid)
    {
        var roleData={
            name:$scope.formData.F_FullName
        };
        if(isValid)
        {
            ngPost($http,isValid,"/backend/role/addrole",$scope.formData,function(data){
                alert(data);
            });
        }

    }
}]);