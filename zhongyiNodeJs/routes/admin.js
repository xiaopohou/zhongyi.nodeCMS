var express = require('express');
var url = require('url');
var router = express.Router();


var siteConfig = require('../public/config/zy_Config');
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


//聚合页
// router.get('/manager/managerUser', function (req, res) {
//     res.render('manager/managerUser');
// });

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
//编辑用户组
router.get('/manager/SystemRole/:defaultParam',function (req,res) {
   //  req.params.defaultParam

    adminFunc.renderPageWithCondition(req,res,'manager/addSystemRole');

});

//提交数据
router.post('/manager/:defaultUrl/add', function (req, res) {

    addSystemGroup(req,res);

});
//修改
router.post('/manager/:defaultUrl/modify',function (req,res) {
    var currentPage=req.params.defualtUrl;
    var currentPage2=req.query.defaultUrl;

    console.log('state is :'+req.body.state);


    var params=url.parse(req.url,true);
    var targetObject=adminFunc.getTargetObjectByUrl('userSystemRoleGroupManager');
    if(targetObject==SystemRoleGroup){

    }
    DBHelper.updateOndeById(targetObject,req,res);
});

//删除
router.get('/manager/:defaultUrl/delete',function (req,res) {

    console.log('-------------------->'+req.query.id);

    var currentPage=req.params.defaultUrl;
    var targetId=req.query.id;
    var targetObject=adminFunc.getTargetObjectByUrl(currentPage);

    DBHelper.deleteOneById(targetObject,req,res);

});

//获取对象方法
router.get('/manager/:defaultUrl/item',function (req,res) {
    //todo:req.params. 可以获取url中占位参数,但是不能获取到?后的参数
    //todo:req.query. req.params 恰恰相反

    var currentPage=req.params.defaultUrl;
    var targetObject=adminFunc.getTargetObjectByUrl(currentPage);
    var targetId=req.query.id;


    var params=url.parse(req.url,true);
    var id=params.query.id;
    if(targetObject==SystemRoleGroup){
        SystemRoleGroup.getOneItem(res,targetId,function (result) {

            console.log('______>>>>>>'+result);
            return res.json(result);
        });
    }else {
        DBHelper.findOne(targetObject,req,res);
    }
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

//用户管理
router.get('/manager/:targetUrl/add',function (req,res) {
    res.render('manager/'+req.params.targetUrl);
});
//分类管理
//资讯管理
module.exports = router;