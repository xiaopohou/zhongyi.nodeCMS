var basePage = require('../../../core/baseController');
var moduleModel= require('../../../models/zyModels/Module');
var moduleCommon = require('../../../models/zyModelCommon/TreeModel');
var dbOperator = require('../../../models/zyDBHelper/zy_Dbopt');
module.exports={
    get_index:function(req,res){
       //res.send('index');
       res.render('manager/module/index',basePage.setLayoutPage(req,res,'x'));
    },
    //初始化菜单
    get_initTreeData:function(req,res)
    {
        res.send('');
    },
    //增加、修改菜单
    post_addModule:function(req,res,id){
        res.send('');
    },
    //编辑菜单
    get_module:function(req,res,id)
    {
        res.send('');
    }
};