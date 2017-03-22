var dbOperator = require('../../../models/zyDBHelper/zy_Dbopt');
var responseData = require('../../../utils/responseData');
var userModel = require('../../../models/zyModels/User');
var url = require('url');
module.exports = {
    post_user:function(req,res){
        var _responseData= new responseData();
        var name=req.body.name,
            pass=req.body.password;
            var where = {"name":name,"password":pass};
            userModel.findOne(where,function(err,doc){
                if(err)
                {
                    _responseData.isSuccess=false;
                }
                
            });
    },
    post_adduser: function (req, res) {
        var _responseData = new responseData();
        new userModel(req.body).save(function (err, doc) {
            if (err) {
                _responseData.isSuccess = false;
                _responseData.errorMessage = '';

            }
            _responseData.isSuccess = true;
            _responseData.errorMessage = 'ok';
            res.json(_responseData);
        });
    }
    ,
    get_id_delete: function (req, res) {
        var _responseData = new responseData();
        userModel.remove({ "_id": id }, function (err, doc) {
            if (err) {
                _responseData.isSuccess = false;
                _responseData.errorMessage = '';
            }
            _responseData.isSuccess = true;
            _responseData.errorMessage = '';
            res.json(_responseData);
        });
    },
    get_id_user: function (req, res, id) {
        var _id = id;
        var _responseData = new responseData();

        userModel.findById(_id, function (err, doc) {
            if (err) {
                _responseData.isSuccess = false;
                _responseData.errorMessage = '';
                res.json(_responseData);
            }
            _responseData.isSuccess = true;
            _responseData.data = doc;
            res.json(_responseData);
        });
    },
    post_updateuser: function (req, res) {
        var _responseData = new responseData();
        var _result = dbOperator.updateOndeById(userModel, req, res, function (err, result, res) {
            if (err) {
                _responseData.isSuccess = false;
                _responseData.errorMessage = '';
            } else {
                _responseData.isSuccess = true;
                _responseData.errorMessage = '';
            }
         
            res.json(_responseData);
        });
    },
};

