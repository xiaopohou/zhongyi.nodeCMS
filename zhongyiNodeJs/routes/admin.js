var express = require('express');
var router = express.Router();


var siteConfig=require('../models/zy_Common');

//管理主页面
router.get('/', function (req, res) {
    res.render('manager/index_v7');
});
//默认页面
router.get('/manager/indexDefault', function (req, res) {

    res.render('manager/indexDefault');
});
module.exports = router;