var express = require('express');
var router = express.Router();


var siteConfig=require('../models/zy_Common');
var adminFunc= require('../models/zy_AdminFunc');

//管理主页面
router.get('/', function (req, res) {
    res.render('manager/index_v7');
});


//后台欢迎页面
router.get('/manager', function (req, res) {
    res.render('manager/welcome',adminFunc.setPageInfo(req,res,'xxx'));
});


//用户管理
router.get('/manager/managerUser',function (req,res) {
    res.render('manager/managerUser');
});

//用户组管理
router.get('/manager/managerUserGroup',function (req,res) {
    res.render('manager/managerUserGroup');
});
//角色管理
//分类管理
//资讯管理
module.exports = router;