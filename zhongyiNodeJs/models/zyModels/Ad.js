var mongoose = require('mongoose');
var shortid = require('shortid');
var AdItems= require('./AdItems');
var Schema = mongoose.Schema;
var AdSchema = new Schema({
    _id:
    {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    name:String,
    url:String,
    status:{type:Number,default:0},//默认否
    type:{type:Number,default:0},//1：为图片，0：为文字广告类型
    CreateDate:{type:Date,default:Date.now},
    updateDate:{type:Date,default:Date.now},
    items:[{type:String,ref:'AdItems'}]
 
});
var Ad=mongoose.model("Ad",AdSchema);

module.exports=Ad;