var nodeApp = angular.module('adminApp',[]);

nodeApp.controller('roleController', ['$scope', '$http', function ($scope, $http) {
    $scope.formData={};
    $scope.refresh = function () {
        alert('fuck you everyday !');
    };
    
    //分页 
    initPagination($scope,$http,'/common/getDocumentList/role','normalList');

     

    $scope.addrole = function (id) {
        if(!id)
        {
            $.modalOpen({
            id: "Form",
            title: "编辑角色",
            url: "/backend/role/addrole",
            width: "550px",
            height: "370px",
            btn: null
            });
        }
        else
        {
             
            ngGet($http,'/backend/role/role/'+id,'',function(data){
                $scope.formData=data;
            });

                $.modalOpen({
                id: "Form",
                title: "新增角色",
                url: "/backend/role/addrole",
                width: "550px",
                height: "370px",
                btn: null
            });
        }

    };
    $scope.processForm=function(isValid)
    {
      var roleData=
      {
          name:$scope.formData.name
      };
        if(isValid)
        {
            ngPost($http,isValid,"/backend/role/addrole",$scope.formData,function(data){
                //表格刷新
               top.window.location.reload();
            });
        }

    },
    $scope.test1=function()
    {
        window.location="/backend/role/test1/laozhao";
    }
}]);


