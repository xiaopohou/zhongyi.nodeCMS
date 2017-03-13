  adminMain.controller('moduleController',function($scope,$rootScope,$timeout,$dialogs,$http, $stateParams,$state){
   
  $scope.name = '';
  $scope.formData={};
  initPagination($scope, $http, '/common/getDocumentList/module', 'normalList');
  $scope.add=function(){
    
    $state.go('addmodule');
  }
  $scope.search=function()
  {
      initPagination($scope, $http, '/common/getDocumentList/module', 'normalList');
  }
  $scope.detail=function(id){
    $state.go('addmodule',{
        _id:id
    });
  }
  $scope.remove=function(id){
      $http.get("/backend/module/"+id+"/delete").success(function(res){
          if(res.isSuccess)
          {
             $state.go('modules');
          }
     });
  }
  var _id= $stateParams._id;
  if(_id){
     $http.get("/backend/module/module/"+_id).success(function(res){
          $scope.formData=res.data;
     });
  }
 
  $scope.processForm=function(isValid){
    if(isValid){
       if(_id)
       {
            
        $http.post('/backend/module/updatemodule',$scope.formData)
        .success(function(res){
          if(res.isSuccess)
          {
             $state.go('modules');
          }
        });
       }else{
          $http({
                method: 'POST',
                url: '/backend/module/addmodule',
                data: $scope.formData,  // pass in data as strings
                dataType: "json",
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            }).success(function (res) {
            
                if (res.isSuccess) {
                
                     $state.go('modules');
                } else {
                    console.log('错误');
                }
            });
       }
    }

  }
}) 