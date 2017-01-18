var express = require('express');
var router= express.Router();
 
router.get('/',function(req,res){
    res.render('managerv2/default');
});

module.exports=router;