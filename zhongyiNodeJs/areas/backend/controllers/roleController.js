var basePage = require('../../../core/baseController');
var roleModel=require('../../../models/Sys_Role');
module.exports={
    get_index:function(req,res){
       //res.send('index');
       res.render('manager/role/index',basePage.setLayoutPage(req,res,'x'));
    },
    get_index2:function(req,res){
       res.render('manager/role/form',{layout:"manager/layout/formLayout"});
    }
};