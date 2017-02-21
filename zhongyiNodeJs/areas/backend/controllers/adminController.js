var basePage = require('../../../core/baseController');
var adminModel = require('../../../models/zyModels/Admin');

var dbOperator = require('../../../models/zyDBHelper/zy_Dbopt');
var ResponseData = require('../../../utils/responseData');
var url = require('url');

module.exports = {
    get_index: function (req, res) {
        //res.send('index');
        res.render('manager/admin/index', basePage.setLayoutPage(req, res, 'x'));
    },

    get_admin: function (req, res, id) {
        var _responseData = new ResponseData();

        adminModel.findOne({ "_id": id }, function (err, doc) {
            if (err) {
                _responseData.isSuccess = 'false';
            } else {
                _responseData.isSuccess = 'success';
                _responseData.data = doc;
            }
            res.json(_responseData);
        });
    },
    post_addadmin: function (req, res) {

        var _responseData = new ResponseData();
        var AdminModel = new adminModel({
            name: req.body.name,
            phone: req.body.phone,
            password: req.body.password,
            email: req.body.email
        });

        AdminModel.save(function (err) {
            if (!err) {
                _responseData.isSuccess = 'success';
            } else {
                _responseData.isSuccess = 'false';
                _responseData.errorMessage = err;
            }
            res.json(_responseData);
        });
    },
    post_updateadmin: function (req, res) {
        var _responseData = new ResponseData();
        var _result = dbOperator.updateOndeById(adminModel, req, res, function (err, result,res) {
            if (!err) {
                _responseData.isSuccess = 'success';
                _responseData.errorMessage = '';
            } else {
                _responseData.isSuccess = 'false';
                _responseData.errorMessage = '';
            }
          
             res.json(_responseData);
              //res.json('__________responseData__________');
        });
        
    }

};