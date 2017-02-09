module.exports={
    get_index:function(req,res){
        //res.send('frontend index');
        res.render('test/index',{layout:false});
    },
    get_form:function(req,res){
        //res.send('frontend index');
        res.render('test/form',{layout:"layout/layout"});
    },
    get_import:function(req,res)
    {
        res.render('test/excel',{layout:"layout/layout"});
    }
};