var basePage = require('../../../core/baseController');
var roleModel = require('../../../models/zyModels/Role');
var dbOperator = require('../../../models/zyDBHelper/zy_Dbopt');
var ResponseData = require('../../../utils/responseData');
var shortid = require('shortid');
module.exports = {
    get_index: function (req, res) {
        //res.send('index');
        res.render('manager/role/index', basePage.setLayoutPage(req, res, 'x'));

    },
    get_addrole: function (req, res) {
        res.render('manager/role/form', { layout: "manager/layout/formLayout" });
    },
    get_role: function (req, res, id) {
        var _responseData = new ResponseData();
        roleModel.findOne({ "_id": id }, function (err, doc) {
            if (err) {
                _responseData.errorMessage = "出错";
                _responseData.isSuccess = 'false';
                res.json(_responseData);
            } else {
                _responseData.data = doc;
                _responseData.isSuccess = 'success';
                res.json(_responseData);
            }
        });
    },
    post_update:function(req,res){

       
   var _responseData = new ResponseData();
       dbOperator.updateOndeById(roleModel,req,res,function(err,result,res){
            if(err)
            {
                _responseData.errorMessage='';
                _responseData.isSuccess=false;

            }else
            { 
                _responseData.errorMessage='';
                _responseData.isSuccess=true;
               
            }
             res.json(_responseData);
       });
    },
    get_id_delete: function (req, res,id) {
       
        var _responseData = new ResponseData();
            var _where = { "_id": id };
            roleModel.remove(_where, function (err, doc) {
                if (err) {
                     console.log('err');
                    _responseData.errorMessage = "出错";
                    _responseData.isSuccess = false;

                } else {
                     console.log('11');
                    _responseData.errorMessage = '成功';
                    _responseData.isSuccess = true;
                }
                res.json(_responseData);
            });
       
    },
    post_addrole: function (req, res) {
        var _responseData = new ResponseData();
        //获取参数
        var name = req.body.name;
        var role = new roleModel({
            name: name
        });
        role.save(function (err) {
            if (err) {
                _responseData.isSuccess = 'false';
                _responseData.errorMessage = '出错了' + err;
            } else {
                _responseData.isSuccess = 'success';
                _responseData.errorMessage = '';
            }
            res.json(_responseData);
        });

    },
    get_test1: function (req, res, name) {
        //获取参数
        //插入数据
        res.send("1111" + name);
    }
};