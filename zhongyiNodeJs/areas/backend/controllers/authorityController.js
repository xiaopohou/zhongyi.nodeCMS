var basePage = require('../../../core/baseController');
module.exports={
    get_index:function(req,res){
       //res.send('index');
       res.render('manager/authority/index',basePage.setLayoutPage(req,res,'x'));
    }
};