module.exports={
    get_index:function(req,res){
        //res.send('frontend index');
        res.render('generate/index',{layout:false});
    },
    get_form:function(req,res){
        //res.send('frontend index');
        res.render('generate/form',{layout:false});
    }
};