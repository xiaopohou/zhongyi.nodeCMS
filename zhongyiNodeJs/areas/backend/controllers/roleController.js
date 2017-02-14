var basePage = require('../../../core/baseController');
var roleModel=require('../../../models/zyModels/Role');
var dbOperator=require('../../../models/zyDBHelper/zy_Dbopt');
var ResponseData= require('../../../utils/responseData');
module.exports={
    get_index:function(req,res){
       //res.send('index');
       res.render('manager/role/index',basePage.setLayoutPage(req,res,'x'));
    },
    get_addrole:function(req,res){
       res.render('manager/role/form',{layout:"manager/layout/formLayout"});
    },
    get_role:function(req,res,id)
    {
        var _responseData=new ResponseData();
 
        roleModel.findOne({"_id":id},function(err,doc){ 
             if(err)
             {
               _responseData.errorMessage="出错了";
                res.json(_responseData);
             }else
             {
                 _responseData.data=doc;
                res.json(_responseData);
             }
        }); 
        
    },
    post_addrole:function(req,res)
    {
         //获取参数
        var name = req.body.name;
 
        var role=new roleModel({
            name:name
        });
        role.save(function(err){
                    
        });
        res.send('success');
    },
     get_test1:function(req,res,name)
    {
         //获取参数
         //插入数据
        res.send("1111"+name);
    }
};