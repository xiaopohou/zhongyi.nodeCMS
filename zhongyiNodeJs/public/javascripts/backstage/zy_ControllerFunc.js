/*
此类主要是zy_controller的外部方法,共用的函数或响应方法在此声明实现
* */
//初始化分页控件基本信息
function initPagination($scope, $http) {
    initPageInfo($scope);
    //todo:此处userSystemRoleGroupManager 暂时写死,这个应该是一个动态参数,以后再改
    getPageInfos($scope, $http, '/admin/manager/getDocumentList/userSystemRoleGroupManager/', 'normalList')

}
//注册事件
function getPageInfos($scope, $http, url, reqType) {

    $scope.loadPage = function (page) {
        $scope.currentPage = page;
        getPageInfos($scope, $http, url);
    }
    $scope.prePage = function () {
        if ($scope.currentPage > 1) {
            $scope.currentPage--;
            getPageInfos($scope, $http, url);
        }
    }
    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.totalPage) {
            $scope.currentPage++;
            getPageInfos($scope, $http, url);
        }
    }
    $scope.firstPage = function () {
        if ($scope.currentPage > 1) {
            $scope.currentPage = 1;
            getPageInfos($scope, $http, url);
        }
    }
    $scope.lastPage = function () {
        if ($scope.currentPage < $scope.totalPage) {
            $scope.currentPage = $scope.totalPage;
            getPageInfos($scope, $http, url);
        }
    }
    $scope.changePageNum = function () {
        $scope.limit = Number($scope.limitNum);
        console.log('url is '+url);
        getPageInfos($scope, $http, url);

    }

    var _url = url + "?limit=" + $scope.limit + "&currentPage=" + $scope.currentPage + "&searchKey=XXOO";


    $http.get(_url).success(function (result) {
        if (reqType == "normalList") {
            $scope.data = result.docs;
        } else {
            $scope.data = result.docs;
        }

        //分页算法
        if (result.pageInfo) {
            $scope.totalItems = result.pageInfo.totalItems;
            $scope.currentPage = result.pageInfo.currentPage;
            $scope.limit = result.pageInfo.limit;
            $scope.startNum = result.pageInfo.startNum;
            //获取总页数
            $scope.totalPage = Math.ceil($scope.totalItems / $scope.limit);

            var pageArr = [];
            var page_start = $scope.currentPage - 2 > 0 ? $scope.currentPage - 2 : 1;
            var page_end = page_start + 4 >= $scope.totalPage ? $scope.totalPage : page_start + 4;
            for (var i = page_start; i <= page_end; i++) {
                pageArr.push(i);
            }
            $scope.pages = pageArr;

        } else {
            console.log("获取分页信息失败")
        }


    });
}

function initPageInfo($scope) {
    $scope.selectPage = [
        {name: '2', value: '2'},
        {name: '4', value: '4'}
    ];
    $scope.limitNum = '4';//默认分页大小选择框中的数字
    $scope.currentPage = 1;
    $scope.totalPage = 1;
    $scope.totalItems = 1;
    $scope.limit = 4;//切换分页大小
    $scope.startNum = 1;
    $scope.keyword = '';

}

function initCurrentPageEventForManagerUser($scope, $http) {
    //分页事件基本信息
    initPageInfo($scope);
    //分页事件
    getPageInfos($scope, $http, '/admin/manager/getDocumentList/userSystemUserManager/', 'normalList')
    //添加事件
    $scope.addUser = function () {
        window.location.href = '/admin/manager/SystemUserAdd'
    }

    $scope.deleteOne = function (id) {
        if (confirm(info)) {
            angularHttpGet($http, '/admin/manager/userSystemUserManager/delete?id=' + id, function (result) {
                console.log('result is :' + result);
                initPagination($scope, $http);
            });
        }
    }
}

function initCurrentPageEventForManagerInfo($scope, $http) {
    //分页事件基本信息
    initPageInfo($scope);
    //分页事件
    getPageInfos($scope, $http, '/admin/manager/getDocumentList/ManagerInfoList', 'normalList')
    //添加事件
    $scope.addInfo = function () {
        window.location.href = '/admin/cms/info/add'
    }
    //单选事件
    $scope.getNewIds=function () {
        getSelectValues();
    }
    $scope.mutilDelete=function () {
        var ids=$("#targetIds").val();
        if(ids==""||ids.split(',').length==0){
            alert('请勾选删除项');
            return;
        }

        if(confirm('确定要删除吗')){
            angularHttpGet($http,'/admin/manager/ManagerInfoList/mutiDelete/?ids='+ids,function (result) {
                initPagination($scope,$http);
            });
        }
    }
    $scope.deleteOne = function (id,confirmMsg) {
        if (confirm(confirmMsg)) {
            angularHttpGet($http, '/admin/cms/info/delete?id=' + id, function (result) {

                initPagination($scope, $http);
            });
        }
    }
}