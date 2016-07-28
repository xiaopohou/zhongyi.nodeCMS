var express = require('express');
var router = express.Router();


var siteConfig = require('../config/zy_Config');
var adminFunc = require('../models/zy_AdminFunc');
var SystemRoleGroup = require('../models/zy_SystemRoleGroup');
var DBHelper = require('../models/zyDBHelper/zy_Dbopt');
//管理主页面
router.get('/', function (req, res) {
    res.render('manager/index_v7');
});


//后台欢迎页面
router.get('/manager', function (req, res) {
    res.render('manager/welcome', adminFunc.setPageInfo(req, res, 'xxx'));
});


//用户管理
router.get('/manager/managerUser', function (req, res) {
    res.render('manager/managerUser');
});

//用户组管理
router.get('/manager/managerUserGroup', function (req, res) {
    res.render('manager/managerUserGroup');
});

//添加用户组
router.get('/manager/SystemRoleAdd', function (req, res) {

    console.log('开始--');

    res.render('manager/addSystemRole');

    console.log('结束--');
});

//提交数据
router.post('/manager/:defaultUrl/add', function (req, res) {

    addSystemGroup(req,res);

});

//添加角色组
function addSystemGroup (req,res) {
    var error;
    var _name=req.body.name;
    var _desc=req.body.description;

    console.log(_name+_desc);
    DBHelper.insertModel(req,res,SystemRoleGroup);
}

router.get('/manager/getDocumentList/:defaultUrl', function (req, res) {
    //判断处理模型对象,供mongo操作表
    var targetObj = getTargetObjectByUrl(req.params.defaultUrl);
    var params = url.parse(req.url, true);
    var searchWords = params.query.searchKey;
    var wheres = [];
    if (searchWords) {
        var regkey = new RegExp(searchWords, 'i');
        if (targetObj == SystemRoleGroup) {
            wheres.push({'name': {$regex: regkey}});
        }
    }
    DBHelper.queryDocumentsByConditions(req, res, targetObj, wheres);
});
//角色管理
//分类管理
//资讯管理
module.exports = router;