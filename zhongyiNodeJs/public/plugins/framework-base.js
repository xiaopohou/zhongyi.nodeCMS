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
                console.log('错误');
            }
        });
    } else {
        console.log('服务器返回：error');
    }
}
//表单验证
function initValidateForForm(formId) {
    $("#" + formId).validate();
}
function itemDelete($http,url,callBack)
{
    $http({
         method: 'get',
         url:url,
         dataType:"json",
         success:function(data){
            callBack(data);
         }
    });
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

 


    $http.get(url + "?limit=" + $scope.limit + "&currentPage=" + $scope.currentPage + "&searchKey=" + $scope.formData.keywords + "&area=" + $scope.area).success(function (result) {
        
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
/*初始化上传图片按钮
* id 初始化上传按钮
* type 文件类型
* key 上传对象是所属 管理员头像、用户头像、文档首图等，后台根据key来进行不同规格的图片压缩
* */
function initUploadFyBtn(id,type,key,callBack){

    var typedes = 'Image Files';
    var filtertype = '*.gif; *.jpg; *.png';
    var buttonText = '上传图片';
    var uploadApi = '/backend/tools/upload';
    var autoUpdate = true;
    var sizeLimit = 1024 * 1024 * 1;
    var adminId = $('#adminId').val();
    var buttonWidth = 100;
    var buttonStyle = 'uploadify-btn-default';
    if(type == 'zip'){
        typedes = 'Zip Files';
        filtertype = '*.zip';
        buttonText = '安装本地模板(*.zip)';
        uploadApi = '/admin/manage/updateCMSTemplate';
        sizeLimit = 1024 * 1024 * 3;
        buttonWidth = 130;
        buttonStyle = 'uploadify-btn-primary';
    }
    $("#"+id).uploadify({
        //指定swf文件
        'swf': '/plugins/uploadify/uploadify.swf',
        //后台处理的页面
        'uploader': uploadApi + '?adminId='+adminId+'&type='+type+'&key='+key,
        //按钮显示的文字
        'buttonText': buttonText,
        'buttonClass' : buttonStyle,
        //显示的高度和宽度，默认 height 30；width 120
        //'height': 15,
        'width': buttonWidth,
        //上传文件的类型  默认为所有文件    'All Files'  ;  '*.*'
        //在浏览窗口底部的文件类型下拉菜单中显示的文本
        'fileTypeDesc': typedes,
        //允许上传的文件后缀
        'fileTypeExts': filtertype,
        //发送给后台的其他参数通过formData指定
        //'formData': { 'adminUserId' : adminUserId , 'type': type, 'key': key},
        sizeLimit :sizeLimit,
    //上传文件页面中，你想要用来作为文件队列的元素的id, 默认为false  自动生成,  不带#
        //'queueID': 'fileQueue',
        //选择文件后自动上传
        'auto': autoUpdate,
        //设置为true将允许多文件上传
        'multi': false,
        //上传成功
        'onUploadSuccess' : function(file, data, response) {
            if(data === 'typeError'){
                // $.tipsShow({
                //     message : "文件类型不正确，请重试！",
                //     type : 'warning',
                //     callBack : function(){
                //         return;
                //     }
                // });
                alert("上传错误我在framework-base.js里"+data);
            }else {
                callBack(data);
            }
        },
        'onComplete': function(event, queueID, fileObj, response, data) {//当单个文件上传完成后触发
            //event:事件对象(the event object)
            //ID:该文件在文件队列中的唯一表示
            //fileObj:选中文件的对象，他包含的属性列表
            //response:服务器端返回的Response文本，我这里返回的是处理过的文件名称
            //data：文件队列详细信息和文件上传的一般数据
            alert("文件:" + fileObj.name + " 上传成功！");
        },
        //上传错误
        'onUploadError' : function(file, errorCode, errorMsg, errorString) {
            alert('The file ' + file.name + ' could not be uploaded: ' + errorString);
        },
        'onError': function(event, queueID, fileObj) {//当单个文件上传出错时触发
            alert("文件:" + fileObj.name + " 上传失败！");
        }
    });
}