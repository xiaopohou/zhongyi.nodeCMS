var basePage = require('../../../core/baseController');
var roleModel=require('../../../models/Sys_Role');
module.exports={
    get_index:function(req,res){
       //res.send('index');
       res.render('manager/role/index',basePage.setLayoutPage(req,res,'x'));
    }
};