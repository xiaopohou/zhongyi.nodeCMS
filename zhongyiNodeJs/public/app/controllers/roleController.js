adminMain.controller('roleController', function ($scope, $rootScope, $timeout, $dialogs, $http, $stateParams, $state) {

  $scope.name = '';
  $scope.formData = {};
  initPagination($scope, $http, '/common/getDocumentList/role', 'normalList');
  $scope.add = function () {
    $state.go('addrole');
  }
  $scope.search = function () {

    initPagination($scope, $http, '/common/getDocumentList/role', 'normalList');


  }
  $scope.detail = function (id) {
    $state.go('addrole', {
      _id: id
    });
  }
  $scope.remove = function (id) {
    $http.get("/backend/role/" + id + "/delete").success(function (res) {
      if (res.isSuccess) {
        $state.go('roles');
      }
    });
  }
  var _id = $stateParams._id;
  if (_id) {
    $http.get("/backend/role/role/" + _id).success(function (res) {
      $scope.formData = res.data;
    });
  }

  $scope.processForm = function (isValid) {

    var data = {
      name: $scope.formData.name
    };

    console.log("++++++++++++++++++"+_id);
    
    if (isValid) {
      if (_id) {

        $http.post('/backend/role/update', $scope.formData)
          .success(function (res) {
            if (res.isSuccess) {
              $state.go('roles');
            }
          });


      } else {
        $http({
          method: 'POST',
          url: '/backend/role/addrole',
          data: $.param(data),  // pass in data as strings
          dataType: "json",
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        }).success(function (res) {

          if (res.isSuccess == 'success') {

            $state.go('roles');
          } else {
            console.log('错误');
          }
        });
      }
    }

  }

  $scope.openWin = function (which) {
    var dlg = null;
    switch (which) {

      // Create Your Own Dialog
      case 'add':
        dlg = $dialogs.create('/modals/addRole.html',
          'whatsYourNameCtrl',
          {},
          { key: false, back: 'static' }
        );

        dlg.result.then(function (name) {
          $scope.name = name;
        }, function () {
          $scope.name = 'You decided not to enter in your name, that makes me sad.';
        });
        break;
    };
  };

}).controller('whatsYourNameCtrl', function ($scope, $modalInstance, data) {
  $scope.user = { name: '' };

  $scope.cancel = function () {

    // $modalInstance.dismiss('canceled');  
  }; // end cancel

  $scope.save = function () {
    return;

    //  $modalInstance.close($scope.user.name);
  }; // end save

  $scope.hitEnter = function (evt) {
    if (angular.equals(evt.keyCode, 13) && !(angular.equals($scope.name, null) || angular.equals($scope.name, '')))
      $scope.save();
  }; // end hitEnter

})
  .run(['$templateCache', function ($templateCache) {



    $templateCache.put('/dialogs/whatsyourname.html', '111111<div class="modal" id="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><form class="form-horizontal" role="form" id="myform" name="myform" ng-submit="processForm(myform.$valid)" novalidate><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title" id="myModalLabel"></h4></div><div class="modal-body"><div class="form-group"><label for="firstname" class="col-sm-2 control-label">角色名称</label><div class="col-sm-10"><input type="text" class="form-control" id="name" name="name" ng-model="formData.name" placeholder="请输入名字" required><label for="name" class="control-label text-danger" ng-show="myForm.name.$invalid && !myForm.name.$pristine"><i class="fa fa-times-circle-o"></i>请输入</label></div></div></div><div class="modal-footer"><button type="submit" class="btn btn-default" ng-disabled="myForm.$invalid">提交</button></div></div></div></form></div>')
      ,
      $templateCache.put('/dialogs/whatsyourname2.html', '222<div class="modal"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title"><span class="glyphicon glyphicon-star"></span> User2\'s Name</h4></div><div class="modal-body"><ng-form name="nameDialog" novalidate role="form"><div class="form-group input-group-lg" ng-class="{true: \'has-error\'}[nameDialog.username.$dirty && nameDialog.username.$invalid]"><label class="control-label" for="username">Name:</label><input type="text" class="form-control" name="username" id="username" ng-model="user.name" ng-keyup="hitEnter($event)" required><span class="help-block">Enter your full name, first &amp; last.</span></div></ng-form></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="cancel()">Cancel</button><button type="button" class="btn btn-primary" ng-click="save()" ng-disabled="(nameDialog.$dirty && nameDialog.$invalid) || nameDialog.$pristine">Save</button></div></div></div></div>')
      ,
      $templateCache.put('/lovestory.html', '222<div class="modal"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title"><span class="glyphicon glyphicon-star"></span> User2\'s Name</h4></div><div class="modal-body"><ng-form name="nameDialog" novalidate role="form"><div class="form-group input-group-lg" ng-class="{true: \'has-error\'}[nameDialog.username.$dirty && nameDialog.username.$invalid]"><label class="control-label" for="username">Name:</label><input type="text" class="form-control" name="username" id="username" ng-model="user.name" ng-keyup="hitEnter($event)" required><span class="help-block">Enter your full name, first &amp; last.</span></div></ng-form></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="cancel()">Cancel</button><button type="button" class="btn btn-primary" ng-click="save()" ng-disabled="(nameDialog.$dirty && nameDialog.$invalid) || nameDialog.$pristine">Save</button></div></div></div></div>');
  }

  ]


  ); // end run / module