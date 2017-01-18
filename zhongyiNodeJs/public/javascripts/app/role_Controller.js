baseModule.controller('roleController',['$scope','$http',function($scope,$http){
    $scope.formData = {};


    $scope.selectType = [
        {key: '1111', value: '0'},
        {key: '1222', value: '1'}
    ];
    $scope.formData.type = '0';
}]);