/**
 * Created by duzhong on 16/8/2.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var KindSchema=new Schema({
    _id:{
        type:String,
        unique:true,
        'default':shortid.generate
    },
    title: String,
    cid:{type:String},
    cid2:{type:String},
    type:String,
    thumbnail:String,
    content:{type:String},
    editorId:{type:String,'default':"0"},
    createDate: {type: Date, default: Date.now},
    updateDate:{type:Date,default:Date.now}
});

var KindModel=mongoose.model('KindModel',KindSchema);
module.exports=KindModel;