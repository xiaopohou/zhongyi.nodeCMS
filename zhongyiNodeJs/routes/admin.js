var express = require('express');
var url = require('url');
var router = express.Router();


var siteConfig = require('../public/config/zy_Config');
var adminFunc = require('../models/zy_AdminFunc');
var SystemRoleGroup = require('../models/zy_SystemRoleGroup');
var SystemUser = require('../models/zy_SystemUser');
var DBHelper = require('../models/zyDBHelper/zy_Dbopt');

//管理主页面
router.get('/', function (req, res) {
    res.render('manager/index_v7');
});

//后台欢迎页面
router.get('/manager', function (req, res) {
    res.render('manager/welcome', adminFunc.setPageInfo(req, res, 'xxx'));
});


//聚合页
// router.get('/manager/managerUser', function (req, res) {
//     res.render('manager/managerUser');
// });

//用户管理
router.get('/manager/managerUser', function (req, res) {
    res.render('manager/managerUser');
});
//编辑用户
router.get('/manager/userSystemUserManager/:id', function (req, res) {
    res.render('manager/addSystemUser')
});

//用户组管理
router.get('/manager/managerUserGroup', function (req, res) {
    res.render('manager/managerUserGroup');
});

//添加用户组
router.get('/manager/SystemRoleAdd', function (req, res) {
    res.render('manager/addSystemRole');
});
//编辑用户组
router.get('/manager/SystemRole/:defaultParam', function (req, res) {
    //  req.params.defaultParam
    adminFunc.renderPageWithCondition(req, res, 'manager/addSystemRole');
});

//提交数据
router.post('/manager/:defaultUrl/add', function (req, res) {
    var targetUrl = req.params.defaultUrl;
    var targetObject = adminFunc.getTargetObjectByUrl(targetUrl);
    if (targetObject == SystemRoleGroup) {
        addSystemGroup(req, res);
    }
    else if (targetObject == SystemUser) {
        addSystemUser(req, res, SystemUser);
    }
});
//修改
router.post('/manager/:defaultUrl/modify', function (req, res) {
    var targetUrl = req.params.defualtUrl;
    var params = url.parse(req.url, true);
    var targetObject = adminFunc.getTargetObjectByUrl(targetUrl);
    DBHelper.updateOndeById(targetObject, req, res);
});

//删除
router.get('/manager/:defaultUrl/delete', function (req, res) {

    console.log('-------------------->' + req.query.id);

    var targetUrl = req.params.defaultUrl;
    var targetId = req.query.id;
    var targetObject = adminFunc.getTargetObjectByUrl(targetUrl);

    DBHelper.deleteOneById(targetObject, req, res);

});








//获取对象方法
router.get('/manager/:defaultUrl/item', function (req, res) {

    var currentPage = req.params.defaultUrl;

    console.log('--------------defaultUrl----------------------->'+currentPage);





    var targetObject = adminFunc.getTargetObjectByUrl(currentPage);
    var targetId = req.query.id;


    var params = url.parse(req.url, true);
    var id = params.query.id;



    if (targetObject == SystemRoleGroup) {
        SystemRoleGroup.getOneItem(res, targetId, function (result) {
            return res.json(result);
        });
    }
    else {

        DBHelper.findOne(targetObject, req, res);
    }
});
//添加角色组
function addSystemGroup(req, res, targetObject) {
    var error;
    var _name = req.body.name;
    var _desc = req.body.description;

    DBHelper.insertModel(req, res, targetObject);
}
//添加角色组
function addSystemUser(req, res, targetObject) {
    DBHelper.insertModel(req, res, targetObject);
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

//用户管理
router.get('/manager/:targetUrl/add', function (req, res) {
    res.render('manager/' + req.params.targetUrl);
});
//分类管理
//资讯管理
module.exports = router;