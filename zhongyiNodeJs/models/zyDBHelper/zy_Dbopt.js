var url = require('url');
var mongoose = require('mongoose');
var shortid = require('shortid');
var SystemRoleGroup = require('../zy_SystemRoleGroup');
var config = require('../../public/config/zy_Config');

var db = mongoose.connect(config.zy_mongo_address);

var DBHelper = {
    queryDocumentsByConditions: function (req, res, model, where) {

        var params = url.parse(req.url, true);
        var currentPage = Number(params.query.currentPage);
        var limit = Number(params.query.limit);
        var startNum = (currentPage - 1) * limit + 1;

        var pageInfo;
        var query;
        //追加查询条件
        if (where && where.length > 1) {
            query = model.find().or(where);
        } else if (where) {
            query = model.find(where);
        } else {
            query = model.find({});
        }
        query.sort({'createDate': -1});

        //todo:根据业务需要动态构造表组合
        // if(model==ZY_SystemRoleGroup){
        //
        // }

        query.exec(function (err, docs) {
            if (err) {
                console.log('数据库操作报错:' + err);
            } else {
                pageInfo = {
                    "totalItems": docs.length,
                    "currentPage": currentPage,
                    "limit": limit,
                    "startNum": startNum
                };

                return res.json({
                    docs: docs.slice(startNum - 1, startNum + limit - 1),
                    pageInfo: pageInfo
                });
            }
        });
    },
    insertModel: function (req, res, model) {
        var newObj = new model(req.body);


        newObj.save(function (err) {
            if (err) {
                res.end(err);

            } else {
                res.end('success');
            }
        });
    },
    findOne: function (obj, req, res) {
        var params = url.parse(req.url, true);
        var targetId = params.query.id;
        if (shortid.isValid(targetId)) {
            obj.findOne({'_id': targetId}, function (err, result) {
                if (err) {
                    res.next(err);
                } else {
                    console.log('查找对象成功');
                    return res.json(result);
                }
            })
        } else {
            res.end(config.zy_system_illegal_param);
        }

    },
    updateOndeById: function (obj, req, res) {
        var params = url.parse(req.url, true);
        var targetId = params.query.id;
        if (shortid.isValid(targetId)) {
            var conditions = {_id: targetId};
            var update = {$set: req.body};
            obj.update(conditions, update, function (err, result) {
                if (err) {
                    res.end(err);
                } else {
                    console.log('修改成功了');
                    res.end('success');
                }
            })
        } else {
            res.end(config.zy_system_illegal_param);
        }
    },
    deleteOneById:function (obj,req,res) {

        var targetId=req.query.id;
        if(shortid.isValid(targetId))
        {
            obj.remove({_id:targetId},function (err,result) {
                if(err){
                    res.end('delete:'+err);
                }else{
                    res.end('success');
                }
            });
        }else{
            res.end(config.zy_system_illegal_param);
        }
    }
};

module.exports = DBHelper;