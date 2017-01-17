var express = require('express');
var router= express.Router();
var 
router.get('/',function(req,res){
    res.render('managerv2/default');
});

module.exports=router;