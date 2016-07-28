//初始化分页控件基本信息
function initPagination($scope, $http) {

    initPageInfo($scope);


    //todo:此处userSystemRoleGroupManager 暂时写死,这个应该是一个动态参数,以后再改
    getPageInfos($scope,$http,'/admin/manager/getDocumentList/'+'userSystemRoleGroupManager'+'/','normalList')

}
//注册事件
function getPageInfos($scope, $http, url, reqType) {

    //注册分页动作,计算当前currentPage
    $scope.loadPage=function (page) {
        $scope.currentPage=page;
        getPageInfos($scope,$http,url);
    }
    $scope.prePage=function () {
        if($scope.currentPage>1){
            $scope.currentPage--;
            getPageInfos($scope,$http,url);
        }
    }
    $scope.nextPage=function () {
        if($scope.currentPage<$scope.totalPage){
            $scope.currentPage++;
            getPageInfos($scope,$http,url);
        }
    }
    $scope.firstPage=function () {
       if($scope.currentPage>1) {
           $scope.currentPage = 1;
           getPageInfos($scope, $http, url);
       }
    }
    $scope.lastPage=function () {
        if($scope.currentPage<$scope.totalPage) {
            $scope.currentPage = $scope.totalPage;
            getPageInfos($scope, $http, url);
        }
    }
    $scope.changePageNum=function () {
        $scope.limit=Number($scope.limitNum);
        getPageInfos($scope, $http, url);
    }
    //todo:

    var _url=url+"?limit="+$scope.limit+"&currentPage="+$scope.currentPage+"&searchKey=XXOO";

    console.log('_url is '+_url);
    $http.get(_url).success(function (result) {
        if(reqType=="normalList"){
            $scope.data=result.docs;
        }else
        {
           $scope.data=result.docs;
        }

    });
}

function initPageInfo($scope) {
    $scope.selectPage = [
        {name: '10', value: '10'},
        {name: '20', value: '20'}
    ];
    $scope.limitNum = '10';//默认分页大小选择框中的数字
    $scope.currentPage = 1;
    $scope.totalPage = 1;
    $scope.totalItems = 1;
    $scope.limit = 10;//切换分页大小
    $scope.startNum = 1;
    $scope.keyword = '';

}