var basePage = require('../../../core/baseController');
module.exports={
    get_index:function(req,res){
       res.render('manager/webchat/index',basePage.setLayoutPage(req,res,'x'));
    }
};