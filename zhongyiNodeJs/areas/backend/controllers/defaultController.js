var basePage = require('../../../core/baseController');
module.exports={
    get_index:function(req,res){
       //don't use layout 
           res.render('manager/default/index',basePage.setLayoutPage2(req, res, 'x'));
    }
};