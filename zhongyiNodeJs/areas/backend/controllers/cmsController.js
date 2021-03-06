var basePage = require('../../../core/baseController');
var Article = require('../../../models/zyModels/Article');
var ArticleCate = require('../../../models/zyModels/ArticleCate');
var dbOperator = require('../../../models/zyDBHelper/zy_Dbopt');
var responseData = require('../../../utils/responseData');
var ArticlecateVM = require('../../../models/zyModels/dtos/ArticleCateVM');
var _ = require('lodash');

module.exports = {
    /**
     * view current page
     */
    get_index: function (req, res) {
        //res.send('index');
        res.render('manager/cms/index', basePage.setLayoutPage(req, res, 'x'));
    },
    /**
     * get single model by id
     */
    get_article_id: function (req, res,id) {
           var _responseData=new responseData();
           Article.findOne({"_id":id},function(err,doc){
               if(err)
               {
                    _responseData.isSuccess=false;
               }else
               {
                   _responseData.isSuccess=true;
                   _responseData.data=doc;
               }
               res.json(_responseData);
           });
    },
    /**
     * insert article by model
     */
    post_article: function (req, res) {
 
        var _responseData=new responseData();
        var articleModel=new Article({
            name:req.body.name,
            classid:req.body.kid1,
            classid2:req.body.kid2,
            coverpage:req.body.coverpage,
            content:req.body.content
        });
        articleModel.save(function(err,doc){
            if(err){
                _responseData.isSuccess=false;
            }else{
                 _responseData.isSuccess=true;
            }
            res.json(_responseData);
        });
    },
    /**
     * remove single data by id
     */
    get_id_remove: function (req, res, id) {

    },
    /**
     * modify article model by model
     */
    post_articleupdate: function (req, res) {
        var _condition = {_id:req.body._id};
         var _responseData = new responseData();
        var _update= {$set:req.body};
        Article.update(_condition,_update,function(err,result){
            if(err)
            {
                _responseData.isSuccess=false;
            }else{
                  _responseData.isSuccess=true;
            }
            res.json(_responseData);
        })
    },
    /**
     * get single cate by id
     */
    get_cate_id: function (req, res, id) {
        var _responseData = new responseData();
        ArticleCate.findById(id, function (err, doc) {
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
            _responseData.data = doc;
            _responseData.isSuccess = true;
            res.json(_responseData);
        });
    },
    get_allarticlecates: function (req, res) {

        var _responseData = new responseData();
        ArticleCate.find({}, function (err, doc) {

            if (err) {
                _responseData.isSuccess = false;
                _responseData.errorMessage = '';
                res.json(_responseData);
            }

            var parentItems = [];
            var allItems = [];
            var childItems = [];
            var _ArticleCateVM = {};

            if (doc.length > 0) {
                //查出所有父级
                allItems = doc;
                _.map(doc, function (docParentItem) {
                    if (docParentItem.parentid == "0") {
                        parentItems.push(docParentItem);
                    }
                });

                var articlecates = [];
                _.map(parentItems, function (p) {
                    _ArticleCateVM = new ArticlecateVM();
                    _ArticleCateVM.name = p.name;
                    _ArticleCateVM._id=p._id;
                   _.map(allItems, function (item) 
                    {
                        if (item.parentid == p._id) {
                            childItems.push(item);
                        }
                    });
                     _ArticleCateVM.child = childItems;
                    articlecates.push(_ArticleCateVM);
                    childItems=[];
                });
            }
            _responseData.data = articlecates;
            _responseData.isSuccess = true;
            _responseData.errorMessage = '';
            res.json(_responseData);

        });
    },
    /**
     * 根据条件获取分类集合
     */
    get_cates_id: function (req, res, id) {
        var _responseData = new responseData();
        var _where = { parentid: id };
        ArticleCate.find(_where, function (err, doc) {
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
            _responseData.data = doc;
            _responseData.isSuccess = false;
            res.json(_responseData);

        });
    },
    /**
     * validate current record is exist
     */
    post_cateExist: function (req, res) {
        var where = { classid: req.body.classid, classid2: req.body.classid2 };
        ArticleCate.findOne(where, function (err, doc) {
            if (err) {
                _responseData.isSuccess = false;
                _responseData.errorMessage = '';

            } else if (!doc) {
                _responseData.isSuccess = false;
                _responseData.errorMessage = '';
            }
            _responseData.data = doc;
            res.json(_responseData);
        });
    },
    /**
     * insert article cate
     */
    post_cate: function (req, res) {
        var _responseData = new responseData();

        var ArticleCateModel = new ArticleCate({
            parentid: req.body.parentid,
            name: req.body.name
        });


        ArticleCateModel.save(function (err, doc) {
            if (err) {
                _responseData.isSuccess = false;
                _responseData.errorMessage = err;

            } else {
                _responseData.isSuccess = true;
                _responseData.errorMessage = '';
            }
            res.json(_responseData);
        });
    },
    /**
     * @req 当前请求对象
     * @res 当前响应对象
     * @id 当前参数
     */
    get_cate_id_remove: function (req, res, id) {
        var _responseData = new responseData();
        ArticleCate.remove({ "_id": id }, function (err, doc) {
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
    /**
     * modify single data by model
     */
    post_cateupdate: function (req, res) {
        var updColums = { $set: req.body };
        var _responseData = new responseData();
        ArticleCate.update({ _id: req.body._id }, updColums, function (err) {

            if (err) {
                _responseData.isSuccess = false;
                _responseData.errorMessage = '';
            } else {
                _responseData.isSuccess = true;
                _responseData.errorMessage = '';
            }
            console.log('______' + err);
            res.json(_responseData);
        });
    }


};