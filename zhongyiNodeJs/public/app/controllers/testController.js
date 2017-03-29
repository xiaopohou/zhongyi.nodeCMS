  adminMain.controller('testController',function($scope,$rootScope,$timeout,$dialogs,$http){
  $scope.confirmed = 'You have yet to be confirmed!';
  $scope.name = '"Your name here."';
  $scope.toupload=function()
  {
       $http.post('/backend/test/toupload').success(function(res){
           alert(res);
       });
  }

})




 
 