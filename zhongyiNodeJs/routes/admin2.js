var express = require('express');
var url = require('url');
var router = express.Router();
var baseRouter = require('../routes/base');

router.get('/',function(req,res){
    res.render('managerv2/dashboard',baseRouter.setPageCurrentInfo(req,res,'xx'));
});
 

router.get('/userlist',function(req,res){
    console.log('xx');
    res.render('managerv2/dock2',adminFunc.setPageInfov2(req,res,'xx'));
});
module.exports = router;