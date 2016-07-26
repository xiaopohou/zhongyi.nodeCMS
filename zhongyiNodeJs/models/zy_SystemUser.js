/**
 * Created by duzhong on 16/7/22.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var zy_SystemUserSchema= new Schema({
    userName:String,
    userPass:String,
    nickName:String,
    userPic:String,
    userSex:String,
    userTel:String,
    userEmail:String,
    group:{
        type:String,
        ref:"zy_SystemRoleGroup"
    },
    createDate:{type:Date,default:Date.now}
});

var zy_SystemUser=mongoose.model("zy_SystemUser",zy_SystemUserSchema);

module.exports=zy_SystemUser;