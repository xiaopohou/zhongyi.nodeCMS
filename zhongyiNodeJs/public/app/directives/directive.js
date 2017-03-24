 


//百度编辑器
adminMain.directive('ueditor', ['$timeout',function ($timeout) { //angular绑定ueditor
    return {
        restrict: 'A',
        require: 'ngModel',
        scope : {},
        link: function (scope, element, attrs, ctrl) {
            var id = 'ueditor_' + Date.now();
            element[0].id = id;
            var ue = UE.getEditor(id, {
                initialFrameWidth: '100%',
                initialFrameHeight: '500',
                autoHeightEnabled: true
            });
            ue.ready(function () {
                ue.addListener('contentChange', function () {
                    ctrl.$setViewValue(ue.getContent());
                    if (!scope.$$phase) {
                        scope.$apply();
                    }
                });
            });
        }
    };
}]);

