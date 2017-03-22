var express = require('express');
 
var encryptHelper= require('../utils/encrypt');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send(encryptHelper.encrypt("laozhao"));
});
router.get('/lg', function (req, res) {
     res.render('test/login',{layout:false});
});
router.post('/lg1', function (req, res) {
 res.redirect('/backend/test/index');
    // res.render('test/login',{layout:false});
});
module.exports = router;
