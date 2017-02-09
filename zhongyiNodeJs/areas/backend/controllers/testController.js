var basePage = require('../../../core/baseController');
var father = require('../../../routes/father');
var father2 = require('../../../routes/father2');
var ex = require('../../../routes/excel');
module.exports={
    get_index:function(req,res){
       //res.send('index');
       res.render('manager/test/excel',basePage.setLayoutPage(req,res,'x'));
    },
     get_say:function(req,res){

         ex.read(req,res);

 
        var _father= new father('1',2);
        var _r= _father.about();

        var fa=father2.a;
        var fb=father2.b();
        res.send('1111'+req.datas);
    }
};