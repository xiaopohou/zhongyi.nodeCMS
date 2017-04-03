var express = require('express');
var router = express.Router();
var url = require('url');
var Role = require('../models/zyModels/Role');
var Admin = require('../models/zyModels/Admin');
var User = require('../models/zyModels/User');
var Module = require('../models/zyModels/Module');
var dbAccess = require('../models/zyDBHelper/zy_Dbopt');
var Article = require('../models/zyModels/Article');
var Articlecate = require('../models/zyModels/ArticleCate');
var Ad = require('../models/zyModels/Ad');
router.get('/getDocumentList/:modelName', function (req, res) {

  var params = url.parse(req.url, true);
  var keywords = params.query.searchKey;
  var area = params.query.b;

  var _modeName = req.params.modelName;
  var defaultModel;
  var _where;

  if (_modeName == 'role') {
    defaultModel = Role;

    if (keywords) {
      _where = { "name": keywords };
    }
  } else if (_modeName == 'admin') {
    defaultModel = Admin;
  }
  else if (_modeName == 'module') {
    defaultModel = Module;
  }
  else if (_modeName == 'article') {
    defaultModel = Article;
  }
  else if (_modeName == 'articlecate') {
    defaultModel = Articlecate;
  }
    else if (_modeName == 'ad') {
    defaultModel = Ad;
  }
  else {
    defaultModel = null;
  }

  // switch (_modeName) {
  //   case 'role':
  //     defaultModel = Role;
  //     break;
  //   case 'admin':
  //     defaultModel = Admin;
  //     break;
  //   case 'module':
  //     defaultModel = Module;
  //     break;
  //   case 'article':
  //     defaultModel = Article;
  //     break;
  //   case 'Articlecate':
  //     defaultModel = Articlecate;
  //     break;
  //   default:
  //     defaultModel = null;
  //     break;
  // }

  dbAccess.queryDocumentsByConditions(req, res, defaultModel, null);

});

module.exports = router;