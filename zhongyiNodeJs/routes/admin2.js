var express = require('express');
var url = require('url');
var router = express.Router();
var baseRouter = require('../routes/base');
var systemUserBiz= require('../models/zyBiz/zy_SystemUserBiz');
//默认首页
router.get('/', function (req, res) {
    res.render('managerv2/dashboard', baseRouter.setPageCurrentInfo(req, res, 'xx'));
});
//用户列表
router.get('/userlist', function (req, res) {
    res.render('managerv2/dock2', adminFunc.setPageInfov2(req, res, 'xx'));
});
//登录
router.get('/login', function (req, res) {
    res.render('managerv2/pageslogin');
});
//登录验证
 
router.post('/login',function(req,res){
    var _uname=req.body.username;
    var _pwd=req.body.password;
    if(_uname!="1"){
        console.log(_uname);
          res.send('账号不对'+_uname);
    }
     if(_pwd!="1")
     {
          console.log(_pwd);
          res.send('密码不对'+_pwd);
     }
    res.redirect('/adminV2');
});
//退出
router.get('/loginout',function(req,res){
    res.render('managerv2/pageslogin');
 
});
module.exports = router;