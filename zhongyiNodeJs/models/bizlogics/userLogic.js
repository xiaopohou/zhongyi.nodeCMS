// var roleModel= require('../zyModels/User');
// module.exports={
//     login:function(req,res)
//     {
//         var name= req.body.name;
//         var password = req.body.password;
       
//         roleModel.findOne({'name':name,'password':password}).exec(function(error,user){
            
//             if(error){
//                 res.end("0");
//             }
//             if(user){
//               res.end("1");   
//             }else
//             {
//                res.end("0");
//             }
            
//         });
//          res.end("0222222222222");
//     }
// };