var basePage = require('../../../core/baseController');
module.exports=
{
   get_index:function(req,res)
   {
    res.render('manager/test/index',{layout:false});
   }
}