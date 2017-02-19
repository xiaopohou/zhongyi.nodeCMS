function ngPost($http, isVal, url, data, callBack) {
    if (isVal) {
        $http({
            method: 'POST',
            url: url,
            data: $.param(data),  // pass in data as strings
            dataType: "json",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        }).success(function (res) {
            if (res.isSuccess == 'success') {
                callBack(data);
            } else {
                alert('服务器返回：' + data);
            }
        });
    } else {
        alert('服务器返回：error');
    }
}
//表单验证
function initValidateForForm(formId) {
    $("#" + formId).validate();
}
//关闭窗口
function closeModal($scope, obj) {
    $scope.formData = {};
    obj.find(".form-control").val("");
}
function ngGet($http, url, data, callBack) {
    $http({
        method: 'GET',
        url: url,
        data: $.param(data),  // pass in data as strings
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
    }).success(function (data) {
        callBack(data);
    });
}

function initPagination($scope, $http, url, dataType) {
    initPageInfo($scope);
    getPageInfos($scope, $http, url, dataType);
}
function initPageInfo($scope) {
    $scope.selectPage = [
        { name: '10', value: '10' },
        { name: '20', value: '20' },
        { name: '30', value: '30' }
    ];
    $scope.limitNum = '10';
    $scope.currentPage = 1;
    $scope.totalPage = 1;
    $scope.totalItems = 1;
    $scope.limit = 10;
    $scope.pages = [];
    $scope.startNum = 1;
}
function getPageInfos($scope, $http, url, reqType) {
    // 定义翻页动作
    $scope.loadPage = function (page) {
        $scope.currentPage = page;
        getPageInfos($scope, $http, url)
    };

    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.totalPage) {
            $scope.currentPage++;
            getPageInfos($scope, $http, url);
        }
    };

    $scope.prevPage = function () {
        if ($scope.currentPage > 1) {
            $scope.currentPage--;
            getPageInfos($scope, $http, url);
        }
    };

    $scope.firstPage = function () {
        if ($scope.currentPage > 1) {
            $scope.currentPage = 1;
            getPageInfos($scope, $http, url);
        }
    };

    $scope.lastPage = function () {
        if ($scope.currentPage < $scope.totalPage) {
            $scope.currentPage = $scope.totalPage;
            getPageInfos($scope, $http, url);
        }
    };

    $scope.changeOption = function () {
        $scope.limit = Number($scope.limitNum);
        getPageInfos($scope, $http, url);
    };

    $http.get(url + "?limit=" + $scope.limit + "&currentPage=" + $scope.currentPage + "&searchKey=" + $scope.keywords + "&area=" + $scope.area).success(function (result) {
        console.log("getData success!");
        if (reqType == 'normalList') {
            $scope.data = result.docs;
        } else if (reqType == 'themeShop') {
            $scope.themeShop = result.docs;
        } else {
            $scope.data = result.docs;
        }
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
    })
}
