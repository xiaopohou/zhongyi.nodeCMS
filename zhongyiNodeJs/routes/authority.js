var express = require('express');
var router= express.Router();
var baseRouter = require('../routes/base');
//默认页
router.get('/', function (req, res) {
    res.render('managerv2/dashboard',baseRouter.setPageCurrentInfo(req, res, 'xxx'));
});

router.get('/authority/:id', function (req, res) {
    res.render('managerv2/dashboard',baseRouter.setPageCurrentInfo(req, res, 'xxx'));
});

router.get('/authorityDelete/:id', function (req, res) {
    res.render('managerv2/dashboard',baseRouter.setPageCurrentInfo(req, res, 'xxx'));
});

router.get('/authorityQuery', function (req, res) {
    res.render('managerv2/dashboard',baseRouter.setPageCurrentInfo(req, res, 'xxx'));
});

module.exports=router;