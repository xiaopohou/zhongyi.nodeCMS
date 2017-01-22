var express = require('express');
var router = express.Router();
var baseRouter = require('../routes/base');
//默认首页
router.get('/',function(req,res){
//
    res.render('managerv3/authority/index',baseRouter.setPageCurrentInfo3(req,res,'xx'));
});
//默认首页
router.get('/roles',function(req,res){
//
    res.render('managerv3/authority/index',baseRouter.setPageCurrentInfo3(req,res,'xx'));
});
module.exports=router;