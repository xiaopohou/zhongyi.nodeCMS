adminMain.controller('permsController', function ($scope, $rootScope, $timeout, $dialogs, $http, $stateParams, $state) {

    $scope.fuck = "111";

    $scope.tabs = [
        { title: '标签页a', content: '标签页a的内容' },
        { title: '标签页b', content: '标签页b的内容', disabled: true }
    ];

    $scope.alertMe = function () {
        setTimeout(function () {
            $window.alert('clicked!');
        });
    };


});