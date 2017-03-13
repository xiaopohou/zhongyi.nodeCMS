var express = require('express');
var router = express.Router();
var url = require('url');
var Role = require('../models/zyModels/Role');
var Admin = require('../models/zyModels/Admin');
var Module= require('../models/zyModels/Module');
var dbAccess = require('../models/zyDBHelper/zy_Dbopt');


router.get('/getDocumentList/:modelName', function (req, res) {

  var params = url.parse(req.url, true);
  var keywords = params.query.searchKey;
  var area = params.query.b;
 
  var _modeName = req.params.modelName;
  var defaultModel;
  var _where;
  if (_modeName == 'role') {
    defaultModel = Role;
      
    if(keywords){
       _where={"name":keywords};
    }
  } else if (_modeName == 'admin') {
    defaultModel = Admin;
  }
  else if (_modeName == 'module') {
    defaultModel = Module;
  } else {
    defaultModel = null;
  }

  dbAccess.queryDocumentsByConditions(req, res, defaultModel, null);

});

module.exports = router;