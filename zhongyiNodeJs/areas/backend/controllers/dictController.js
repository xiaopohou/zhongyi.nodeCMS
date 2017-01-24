var basePage = require('../../../core/baseController');
module.exports={
    get_index:function(req,res){
       //res.send('index');
       res.render('manager/dict/index',basePage.setLayoutPage(req,res,'x'));
    }
};