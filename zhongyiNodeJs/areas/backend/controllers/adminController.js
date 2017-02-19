var basePage = require('../../../core/baseController');
var adminModel = require('../../../models/zyModels/Admin');
var dbOperator = require('../../../models/zyDBHelper/zy_Dbopt');
var ResponseData = require('../../../utils/responseData');
module.exports = {
    get_index: function (req, res) {
        //res.send('index');
        res.render('manager/admin/index', basePage.setLayoutPage(req, res, 'x'));
    },
    post_addadmin: function (req, res) {
        var _responseData = new ResponseData();
        var adminModel = new adminModel({
            name: req.body.name,
            phone: req.body.phone,
            password: req.body.password
        });
        console.log(req.body.name);
        adminModel.save(function (err) {
            if (!err) {
                _responseData.isSuccess = true;
            } else {
                _responseData.isSuccess = false;
                _responseData.errorMessage = err;
            }
            res.json(_responseData);
        });
    },
    get_admin: function (req, res, id) {
        var _responseData = new ResponseData();
        adminModel.findOne({ "_id": id }, function (err, doc) {
            if (!err) {
                _responseData.isSuccess = false;
            } else {
                _responseData.isSuccess = true;
                _responseData.data = doc;
            }
            res.json(_responseData);
        });
    }
};