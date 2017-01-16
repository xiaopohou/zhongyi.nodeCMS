var express = require('express');
var url = require('url');
var router = express.Router();
var adminFunc = require('../models/zy_AdminFunc');
router.get('/',function(req,res){
    res.render('managerv2/dashboard',adminFunc.setPageInfov2(req,res,'xx'));
});

module.exports = router;