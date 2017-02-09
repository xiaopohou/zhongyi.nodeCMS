var basePage = require('../../../core/baseController');
module.exports={
    get_index:function(req,res){
       //res.send('index');
       res.render('manager/test/excel',basePage.setLayoutPage(req,res,'x'));
    },
     get_say:function(req,res){
       res.send('1111');
    }
};