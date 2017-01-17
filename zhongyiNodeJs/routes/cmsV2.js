var express = require('express');
var router = express.Router();
var url = require('url');
var baseRouter = require('../routes/base');
//默认页



router.get('/', function (req, res) {
 // res.send("--------------------2111--------------------------");
   
   res.render('managerv2/dashboard', baseRouter.setPageCurrentInfo(req, res, 'x'));
});

router.get('/fuckyou', function (req, res) {
var params = url.parse(req.url,true);
var name = params.query.name;
var age = params.query.age;
   //  res.send("--------------------3333333333--------------------------"+name+age);


    res.render('managerv2/dashboard', baseRouter.setPageCurrentInfo(req, res, 'x'));
});

router.get('/fuckyou2/:name', function (req, res) {

 var name = req.params.name;
 
 res.render('managerv2/dashboard', baseRouter.setPageCurrentInfo(req, res, 'x'));
 
});
router.get('/newsDelete/:id', function (req, res) {
    res.render('managerv2/dashboard', baseRouter.setPageCurrentInfo(req, res, 'x'));
});

router.get('/newsQuery', function (req, res) {
    res.render('managerv2/dashboard', baseRouter.setPageCurrentInfo(req, res, 'x'));
});

module.exports = router;