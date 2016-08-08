var express = require('express');
var url = require('url');
var router = express.Router();

var InfoModel = require('../models/zy_Info');

//查询
router.get('/get', function (req, res) {
    InfoModel.find(function (error, result) {
        if (error) {
            res.end(error);
        }
        res.json(result);
    });

});
//添加
router.post('/info',function (req,res) {
    InfoModel.create({title:"老赵"+Math.random(),desc:"desc",content:"content",editorId:"1",parentId:"0"},function (error,result) {
        if(error){
            res.end(error);
        }else{
            res.end(error);
        }
    });
});
//删除
router.delete('/info/:id',function (req,res) {


    InfoModel.remove({_id:req.params.id},function(err,docs){//删除id为4的记录
        if(err){
            res.end(err);
        }
        
        InfoModel.find(function (err,result) {
             res.json(result);
        });

    });

});

router.get('/students/404', function (req, res) {
    // res.statusCode = 301;
    // return res.end('404');
});

module.exports = router;