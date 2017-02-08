var basePage = require('../../../core/baseController');
var roleModel=require('../../../models/zyModels/Sys_Role');
var dbOperator=require('../../../models/zyDBHelper/zy_Dbopt');
 
module.exports={
    get_index:function(req,res){
       //res.send('index');
       res.render('manager/role/index',basePage.setLayoutPage(req,res,'x'));
    },
    get_addrole:function(req,res){
       res.render('manager/role/form',{layout:"manager/layout/formLayout"});
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