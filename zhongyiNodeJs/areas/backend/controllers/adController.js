var basePage = require('../../../core/baseController');
var adModel = require('../../../models/zyModels/Ad');

var dbOperator = require('../../../models/zyDBHelper/zy_Dbopt');
var ResponseData = require('../../../utils/responseData');


module.exports = {
    get_id: function (req, res, id) {
        var _res = new ResponseData();
        adModel.findOne({ _id: id }, function (err, doc) {
            if (err) {
                _res.isSuccess = false;
            } else {
                _res.isSuccess = true;
                _res.data = doc;
            }
            res.json(_res);
        });
    },
    post_addad: function (req, res) {
        var _adModel = new adModel({
            name: req.body.name,
            status: req.body.status,
            type: req.body.type,
            url:req.body.url,
            coverimage:req.body.coverimage
        });
        var _res = new ResponseData();
        _adModel.save(function (err, doc) {
            if (!err) {
                _res.isSuccess = true;

            } else {
                _res.isSuccess = false;
            }
            res.json(_res);
        });
    },
    post_adupdate: function (req, res) {
        var _conditon = { _id: req.body._id };
        var _updateDoc = { $set: req.body };
         var _res = new ResponseData();
        adModel.update(_conditon, _updateDoc, function (err) {
            if (!err) {
                _res.isSuccess = true;

            } else {
                _res.isSuccess = false;
            }
            res.json(_res);
        })
    },
    get_id_delete: function (req, res, id) {
        adModel.remove({ _id: id }, function (err) {
            if (!err) {
                _res.isSuccess = true;

            } else {
                _res.isSuccess = false;
            }
            res.json(_res);
        })
    }
};