/**
 * Created by duzhong on 16/8/2.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('shortid');
var InfoSchema=new Schema({
    _id:{
        type:String,
        unique:true,
        'default':shortid.generate
    },
    title: String,
    desc: {type:String},
    state:String,
    content:String,
    parentId:{type:String},
    editorid:{type:String,'default':"0"},
    createDate: {type: Date, default: Date.now},
    updateDate:{type:Date,default:Date.now}
});

var InfoModel=mongoose.model('InfoModel',InfoSchema);
module.exports=InfoModel;