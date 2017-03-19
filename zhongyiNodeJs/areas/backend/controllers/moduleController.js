var basePage = require('../../../core/baseController');
var moduleModel= require('../../../models/zyModels/Module');
var moduleCommon = require('../../../models/zyModelCommon/TreeModel');
var dbOperator = require('../../../models/zyDBHelper/zy_Dbopt');
var ResponseData= require('../../../utils/responseData');
/**
 * action一切都要小写,否则无法路由到
 */
module.exports={
    get_index:function(req,res){
       //res.send('index');
       res.render('manager/module/index',basePage.setLayoutPage(req,res,'x'));
    },
     get_create:function(req,res){
       //res.send('index');
       res.render('manager/module/create',basePage.setLayoutPage(req,res,'x'));
    },
    //初始化菜单
    get_initTreeData:function(req,res)
    {
        res.send('');
    },
    post_addmodule:function(req,res){
        console.log('_______________'+req.body.name);
        var _responseData= new ResponseData();
        var ModuleModel= new moduleModel({
            name:req.body.name,
            parentid:req.body.parentid,
            icon:req.body.icon,
            url:req.body.url,
            target:req.body.target,
            sort:req.body.sort
        });
       
 
        ModuleModel.save(function(err){
            if(!err){
                _responseData.isSuccess="success1111";
            }else{
                _responseData.isSuccess="false";
                  _responseData.errorMessage=err;
            }
            res.json(_responseData);
        });
        
    },
    //编辑菜单
    post_updatemodule:function(req,res)
    {
       var _responseData = new ResponseData();
        var _result = dbOperator.updateOndeById(moduleModel, req, res, function (err, result,res) {
            if (!err) {
                _responseData.isSuccess = true;
                _responseData.errorMessage = '';
            } else {
                _responseData.isSuccess = false;
                _responseData.errorMessage = '';
            }
             res.json(_responseData);
        });
    },
    get_modules:function(req,res){
        var where = {parentid:'0'};
        moduleModel.find(where,function(err,doc){
           res.json(doc);
        });
    },
    get_module_id:function(req,res,id)
    {
     

        moduleModel.findOne({"_id":id},function(err,doc){
            if(err)
            {
                res.end('error in get_module');
                return;
            }
         var _responseData=new ResponseData();
         _responseData.isSuccess=true;
         _responseData.data=doc;
         _responseData.errorMessage='';
            res.json(_responseData);
        });
    }
};