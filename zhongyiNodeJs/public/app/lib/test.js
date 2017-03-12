 
//必须要引入的模块有两个ngAnimate\ui.bootstrap,一个都不能少,必须在这个模板加载的时候引入
adminMain.controller('ModalDemoCtrl', function ($scope, $uibModal) {
//然后就是主控制器,没什么,注意$uibModal这个东西,也是要在控制器中引入的
  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;
  $scope.fuck=function(){
      alert('1111');
  }
  
});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

adminMain.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {
//这是模态框的控制器,记住$uibModalInstance这个是用来调用函数将模态框内的数据传到外层控制器中的,items则上面所说的入参函数,它可以获取到外层主控制器的参数
  $scope.items = items;//这里就可以去外层主控制器的数据了
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    //close函数是在模态框关闭后调用的函数,他会将这个参数传到主控制器的results函数中,作为回调值
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    //dismiss也是在模态框关闭的时候进行调用,而它返回的是一个reason
    $uibModalInstance.dismiss('cancel');
  };
});