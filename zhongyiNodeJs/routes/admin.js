var express = require('express');
var url = require('url');
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

    res.render('manager/addSystemRole');


});
router.get('/manager/SystemRole/:defaultParam',function (req,res) {
   //  req.params.defaultParam
    adminFunc.renderPageWithCondition(req,res,'manager/addSystemRole');

});
//提交数据
router.post('/manager/:defaultUrl/add', function (req, res) {
    //console.log('defaultUrl is :');
    addSystemGroup(req,res);

});

//添加角色组
function addSystemGroup (req,res) {
    var error;
    var _name=req.body.name;
    var _desc=req.body.description;

    DBHelper.insertModel(req,res,SystemRoleGroup);
}

router.get('/manager/getDocumentList/:defaultUrl', function (req, res) {

    var targetObj = adminFunc.getTargetObjectByUrl(req.params.defaultUrl);

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