var crypto=require('crypto');
exports.encrypt=function(s)
{
     var md5=crypto.createHash('md5');
     md5.update(s);
     var r=md5.digest('hex');
     return r;
}