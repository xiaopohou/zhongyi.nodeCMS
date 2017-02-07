function ngPost($http, isVal, url, data, callBack) {
    if (isVal) {
           $http({
            method  : 'POST',
            url     : url,
            data    : $.param(data),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        }).success(function (data) {
            if (data == 'success') {
                callBack(data);
            } else {
                alert('服务器返回：' + data);
            }
        });
    } else {
        alert('服务器返回：error');
    }
}
