var basePage = require('../../../core/baseController');
var userLogic = require('../../../models/bizlogics/userLogic');
module.exports=
{
    get_index:function(req,res)
    {
        res.render('manager/login/login',{layout:false});
       // res.render('manager/role/index',basePage.setLayoutPage(req,res,'x'));
    },
    post_dologin:function(req,res)
    {
     var result=  userLogic.login(req,res);
      
     res.send(result);
       // res.render('manager/role/index',basePage.setLayoutPage(req,res,'x'));
    }
};