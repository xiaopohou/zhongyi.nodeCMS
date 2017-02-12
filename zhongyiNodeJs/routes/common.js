var express = require('express');
var router = express.Router();
var url = require('url');
var Role=require('../models/zyModels/Role');
var dbAccess= require('../models/zyDBHelper/zy_Dbopt'); 
 
 
router.get('/getDocumentList/:modelName', function (req, res) {
    
 

 var params = url.parse(req.url,true);
    var keywords = params.query.a;
    var area = params.query.b;
  var _modeName=req.params.modelName;
  var defaultModel;
 
    if(_modeName=='role')
    {
      defaultModel=Role;
    }else
    {
      defaultModel=null;
      
    }
 
  dbAccess.queryDocumentsByConditions(req,res,defaultModel,null);

 
 
   
   
});
 
module.exports = router;