/**
 * Created by duzhong on 16/7/25.
 */

//百度编辑器
infoMangerModule.directive('ueditor', ['$timeout',function ($timeout) { //angular绑定ueditor
    return {
        restrict: 'A',
        require: 'ngModel',
        scope : {},
        link: function (scope, element, attrs, ctrl) {
            var id = 'ueditor_' + Date.now();
            element[0].id = id;
            var ue = UE.getEditor(id, {
                initialFrameWidth: '100%',
                initialFrameHeight: '300',
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