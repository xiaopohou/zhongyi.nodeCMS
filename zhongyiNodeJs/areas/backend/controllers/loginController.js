var basePage = require('../../../core/baseController');
var userModel = require('../../../models/zyModels/User');
var responseData = require('../../../utils/responseData');
module.exports =
    {
        get_index: function (req, res) {
            res.render('manager/login/login', { layout: false });
        },
        get_loginout: function (req, res) {
            req.session.user = null;
            var _responseData = new responseData();
            _responseData.isSuccess = true;
            res.json(_responseData);

        },
        post_dologin: function (req, res) {
            var _where = req.body;
            var _responseData = new responseData();
            userModel.findOne(_where, function (err, doc) {
                if (err) {
                    _responseData.isSuccess = false;
                    _responseData.errorMessage = err;
                     res.json(_responseData);
                }
                if (!doc) {
                    _responseData.isSuccess = false;
                    _responseData.errorMessage = '用户不存在';
                     res.json(_responseData);
                } else {
                    //storage session
                    var currentUser = {
                        name: doc.name,
                        id: doc.id
                    };
                    req.session.user = currentUser;

                    _responseData.isSuccess = true;
                    _responseData.errorMessage = '查询成功';
                    _responseData.data = doc;
                     res.json(_responseData);
                }

               
            });
        }
    };