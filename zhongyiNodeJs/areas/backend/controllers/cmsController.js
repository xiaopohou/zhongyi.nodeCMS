var basePage = require('../../../core/baseController');
var Article = require('../../../models/zyModels/Article');
var ArticleCate = require('../../../models/zyModels/ArticleCate');
var dbOperator = require('../../../models/zyDBHelper/zy_Dbopt');
var responseData = require('../../../utils/responseData');
module.exports = {
    get_index: function (req, res) {
        //res.send('index');
        res.render('manager/cms/index', basePage.setLayoutPage(req, res, 'x'));
    }
    ,
    get_article_id: function (req, res) {

    },
    post_article: function (req, res) {

    },
    get_id_remove: function (req, res, id) {

    },
    post_articleupdate: function (req, res) {
        
    },
    get_cate_id: function (req, res, id) {
        var _responseData = new responseData();
        ArticleCate.findById(id).success(function (err, doc) {
            if (err) {
                _responseData.isSuccess = false;
                _responseData.errorMessage = '';
                res.json(_responseData);
            }
            else if (!doc) {
                _responseData.isSuccess = false;
                _responseData.errorMessage = '';
                res.json(_responseData);
            }
            _responseData.data=doc;
            _responseData.isSuccess = false;
            res.json(_responseData);
        });
    },
    post_cate: function (req, res) {
        var _responseData = new responseData();
        ArticleCate.save(req.body, function (err, doc) {
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
    get_cate_id_remove: function (req, res, id) {
          var _responseData = new responseData();
          ArticleCate.remove({"_id":id},function(err,doc){
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
    post_cateupdate: function (req, res) {
        var updColums={$set:req.body};
        ArticleCate.update({_id:id},)
    }
    //上传图片

};