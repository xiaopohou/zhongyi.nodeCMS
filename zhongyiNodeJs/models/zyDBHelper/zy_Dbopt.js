var url = require('url');
var mongoose = require('mongoose');
var SystemRoleGroup= require('../zy_SystemRoleGroup');
var config = require('../../config/zy_Config');

var db = mongoose.connect(config.zy_mongo_address);

var DBHelper = {
    queryDocumentsByConditions: function (req, res, model, where) {
        var params = url.parse(req.url, true);
        var currentPage = params.query.currentPage;
        var limit = params.query.limit;
        var startnum = (currentPage - 1) * limit + 1;
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

        //构造表组合
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
                    "startNum": Number(startNum)
                };

                return res.json({
                    docs: docs.slice(startnum - 1, startnum + limit - 1),
                    pageInfo: pageInfo
                });
            }
        });
    }
};

module.exports = DBHelper;