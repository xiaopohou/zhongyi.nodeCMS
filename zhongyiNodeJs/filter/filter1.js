var url = require('url');

module.exports = function (req, res, next) {
    var p=url.parse(req.url,true);
 
    console.log('------------------------------------请求之前...',p);
    // 请求通过，直接调用next();即可
    next();
};