var basePage = require('../../../core/baseController');
var adModel = require('../../../models/zyModels/Ad');
var adItemsModel = require('../../../models/zyModels/AdItems');

var dbOperator = require('../../../models/zyDBHelper/zy_Dbopt');
var ResponseData = require('../../../utils/responseData');
var AdItems = require('../../../models/zyModels/AdItems');
var url = require('url');

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
    get_oneads: function (req, res) {
        var params = url.parse(req.url, true);
        var _res = new ResponseData();
               
        adModel.findOne({ '_id': params.query.id }).populate('items').exec(function (err, doc) {
        
            if (err) {
                _res.isSuccess = false;
            } else {
                
                if (doc) {
                  
                    _res.isSuccess = true;
                    _res.data = doc;
                }
                else {
                     _res.isSuccess = false;
                    _res.data = doc;
                }
            }
            res.json(_res);
        });
    },
    post_addad: function (req, res) {
        var _adModel = new adModel({
            name: req.body.name,
            status: req.body.status,
            type: req.body.type,
            url: req.body.url,
            coverimage: req.body.coverimage
        });
        var _res = new ResponseData();
        _adModel.save(function (err, doc) {
            if (!err) {
                _res.isSuccess = true;

            } else {
                _res.isSuccess = false;
            }
            _res.data = _adModel._id;
            res.json(_res);
        });
    },
    post_addaditems: function (req, res) {
        var _res = new ResponseData();
        var params = url.parse(req.url, true);
        var _adId = params.query.adId;

        adModel.findOne({ '_id': _adId }, function (err, doc) {
            if (doc) {

                var _AdItems = new AdItems(req.body);
                //_AdItems.coverimage = req.body.coverimage;
                _AdItems.save(function (err2) {
                    if (err2) {

                        _res.isSuccess = false;
                        _res.errorMessage = err2;

                        res.json(_res);

                    } else {

                        doc.items.push(_AdItems);
                        doc.save(function (err3) {
                            if (err3) {

                                _res.isSuccess = false;
                                _res.errorMessage = err3;
                            } else {

                                _res.isSuccess = true;
                            }
                            res.json(_res);
                        });
                    }
                });
            }
            else {

                _res.isSuccess = false;
                res.json(_res);
            }

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