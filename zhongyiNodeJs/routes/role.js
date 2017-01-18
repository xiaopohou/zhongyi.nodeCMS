var express = require('express');
var router= express.Router();
 var baseRouter = require('../routes/base');
router.get('/',function(req,res){
    res.render('managerv2/role/index',baseRouter.setPageCurrentInfo(req,res,'xx'));
});

module.exports=router;